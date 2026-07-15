"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { sendEnquiry, type EnquiryState } from "@/app/actions";
import { classGroups } from "@/lib/content";
import { site } from "@/lib/site";

const initial: EnquiryState = { status: "idle" };

const labelCls = "flex flex-col gap-1.5 text-[13px] font-extrabold tracking-tight text-navy";
const inputCls =
  "rounded-xl border-2 border-[#dbeaf6] bg-white px-4 py-3 font-body text-[15px] text-navy outline-none focus:border-sky";

function SubmitButton({ kind }: { kind: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full cursor-pointer rounded-2xl bg-sun px-6 py-4 font-fred text-lg font-semibold text-navy shadow-[0_5px_0_var(--color-sun-700)] transition-transform active:translate-y-1 active:shadow-none disabled:cursor-progress disabled:opacity-70"
    >
      {pending
        ? "Sending…"
        : kind === "admissions"
          ? "Submit application"
          : "Send message"}
    </button>
  );
}

export function EnquiryForm({
  kind = "enquiry",
}: {
  kind?: "enquiry" | "admissions";
}) {
  const [state, formAction] = useActionState(sendEnquiry, initial);

  if (state.status === "success") {
    return (
      <div className="animate-fade-up text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f7ee]">
          <span className="font-fred text-4xl font-bold text-mint">✓</span>
        </div>
        <h2 className="mt-5 font-fred text-2xl font-bold text-navy">
          {kind === "admissions" ? "Application received!" : "Message sent!"}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">{state.message}</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-sky px-7 py-3 font-fred font-semibold text-white"
        >
          Back home
        </Link>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={formAction} noValidate>
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="mb-5 rounded-xl border-2 border-coral/40 bg-coral/10 px-4 py-3 text-sm font-semibold text-navy"
        >
          {state.message}
        </p>
      )}

      <input type="hidden" name="kind" value={kind} />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>
          {kind === "admissions" ? "Parent / guardian name" : "Your name"}
          <input name="name" placeholder="Full name" className={inputCls} autoComplete="name" />
          {err.name && <span className="font-semibold text-coral">{err.name}</span>}
        </label>

        {kind === "admissions" && (
          <>
            <label className={labelCls}>
              Child&rsquo;s name
              <input name="childName" placeholder="Your child's full name" className={inputCls} />
            </label>
            <label className={labelCls}>
              Child&rsquo;s age
              <input name="childAge" placeholder="e.g. 4 years" className={inputCls} />
            </label>
            <label className={labelCls}>
              Which class?
              <select name="childClass" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Choose a class…
                </option>
                {classGroups.map((group) => (
                  <optgroup key={group.stage} label={group.stage}>
                    {group.classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
          </>
        )}

        <label className={labelCls}>
          Phone number
          <input name="phone" placeholder="0803 …" className={inputCls} autoComplete="tel" inputMode="tel" />
          {err.phone && <span className="font-semibold text-coral">{err.phone}</span>}
        </label>
        <label className={labelCls}>
          Email address
          <input name="email" placeholder="you@email.com" className={inputCls} autoComplete="email" inputMode="email" />
          {err.email && <span className="font-semibold text-coral">{err.email}</span>}
        </label>
      </div>

      <label className={`${labelCls} mt-4`}>
        {kind === "admissions" ? "Anything you'd like us to know?" : "Your message"}
        <textarea
          name="message"
          placeholder={kind === "admissions" ? "Tell us a little about your child…" : "How can we help?"}
          className={`${inputCls} min-h-28 resize-y`}
        />
      </label>

      <SubmitButton kind={kind} />

      <p className="mt-3 text-center text-xs text-ink-soft">
        Prefer to talk? Call{" "}
        <a href={`tel:${site.phones[0].tel}`} className="font-bold text-sky">
          {site.phones[0].display}
        </a>
        .
      </p>
    </form>
  );
}
