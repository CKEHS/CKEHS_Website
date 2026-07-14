"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

// Simple in-memory rate limit per server instance — enough to blunt a bot
// hammering the endpoint, without pulling in extra infrastructure.
const hits = new Map<string, number[]>();
function rateLimited(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot: real users never fill a hidden field.
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const kind = (formData.get("kind") as string) || "enquiry";
  const name = ((formData.get("name") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const phone = ((formData.get("phone") as string) || "").trim();
  const childAge = ((formData.get("childAge") as string) || "").trim();
  const programme = ((formData.get("programme") as string) || "").trim();
  const message = ((formData.get("message") as string) || "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!phone && !email) errors.phone = "Add a phone number or email so we can reply.";
  if (email && !isEmail(email)) errors.email = "That email doesn't look right.";
  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "Please check the highlighted fields." };
  }

  if (rateLimited(phone || email || name)) {
    return {
      status: "error",
      message: "You've sent this a few times already — please call us instead.",
    };
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.ENQUIRY_TO || user;

  const fallback = `We couldn't send your message just now. Please call us on ${site.phones[0].display} or email ${site.emails.primary} and we'll help right away.`;

  if (!user || !pass || !to) {
    // Missing config shouldn't 500 — tell the visitor how to reach us instead.
    return { status: "error", message: fallback };
  }

  const subjectKind = kind === "admissions" ? "Admissions enquiry" : "Website enquiry";
  const lines = [
    `New ${subjectKind} from the Creative Kids website`,
    "",
    `Name: ${name}`,
    phone && `Phone: ${phone}`,
    email && `Email: ${email}`,
    childAge && `Child's age: ${childAge}`,
    programme && `Programme: ${programme}`,
    "",
    "Message:",
    message || "(none)",
  ].filter(Boolean);

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transport.sendMail({
      from: `"Creative Kids Website" <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `${subjectKind}: ${name}`,
      text: lines.join("\n"),
    });

    return {
      status: "success",
      message:
        kind === "admissions"
          ? "Application received! Our admissions team will call you within 24 hours."
          : "Thank you — we've got your message and will reply within 24 hours.",
    };
  } catch (err) {
    console.error("[sendEnquiry] mail failed:", err);
    return { status: "error", message: fallback };
  }
}
