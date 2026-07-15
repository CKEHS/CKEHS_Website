// Single source of truth for the school's real-world details.
// Everything here comes from creativekids.ng — change it in one place.

export const site = {
  name: "Creative Kids Academy",
  shortName: "Creative Kids",
  tagline: "Future Leaders With Creative Minds",
  founded: 2008,
  url: "https://creativekids.ng",

  address: {
    line: "Plot L182 Ellicot Citi Street, Kubwa Extension III",
    city: "Abuja",
    country: "Nigeria",
  },

  // Displayed numbers and their international (wa.me / tel:) forms.
  phones: [
    { display: "0903 600 0063", tel: "+2349036000063" },
    { display: "0707 707 8926", tel: "+2347077078926" },
  ],

  emails: {
    // Using the working Gmail publicly for now; switch to info@creativekids.ng
    // once that mailbox/forwarding is set up.
    primary: "creativekidsacademyng@gmail.com",
    secondary: "creativekids.academy@yahoo.com",
  },

  hours: [
    { day: "Monday – Friday", time: "8:00am – 3:00pm" },
    { day: "Saturday", time: "Open for tutorials" },
    { day: "Sunday", time: "Closed" },
  ],

  // The number the WhatsApp "chat with us" button opens.
  whatsapp: "2349036000063",

  socials: {
    facebook: "https://web.facebook.com/creativekids.kubwa",
    instagram: "https://www.instagram.com/creativekidsacademykubwa/",
    instagramSecondary: "https://www.instagram.com/ckehskubwa/",
  },

  // Edves parent portal for checking results.
  resultsPortal: "https://ckehs.edves.net/parents/",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;
