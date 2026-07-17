// All page content for the site, kept in one typed place so copy lives
// apart from layout. Sourced from creativekids.ng (real school content).

import { site } from "@/lib/site";

export type PhaseId = "creche" | "nursery" | "primary" | "junior" | "senior";

export type Phase = {
  id: PhaseId;
  name: string;
  short: string;
  age: string;
  color: string; // token name used for accents
  desc: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const phases: Phase[] = [
  {
    id: "creche",
    name: "Crèche & Daycare",
    short: "Crèche",
    age: "6 months – 2 years",
    color: "coral",
    desc: "A warm, home-from-home for our youngest learners, with loving carers, gentle routines and plenty of songs, cuddles and sensory play.",
    image: "/photos/academics-creche.jpg",
    imageAlt: "A parent and toddler exploring together at Creative Kids Academy",
    points: [
      "Low carer-to-child ratios",
      "Safe, hygienic sleep and feeding spaces",
      "Sensory play that sparks early development",
      "Daily updates so parents never miss a moment",
    ],
  },
  {
    id: "nursery",
    name: "Nursery & Pre-school",
    short: "Nursery",
    age: "2 – 5 years",
    color: "sun",
    desc: "Where curiosity takes off. Through Montessori-inspired play, stories and discovery, children build language, confidence and a love of learning — many joining their first words by age three.",
    image: "/photos/academics-nursery.jpg",
    imageAlt: "A nursery pupil busy with a craft activity",
    points: [
      "Montessori-inspired, play-based foundations",
      "Early phonics, music, art and outdoor play",
      "Gentle school-readiness in the final year",
      "Kindness, sharing and social confidence",
    ],
  },
  {
    id: "primary",
    name: "Primary School",
    short: "Primary",
    age: "5 – 11 years",
    color: "sky",
    desc: "A rich, balanced curriculum that keeps wonder alive while building strong literacy, numeracy and thinking skills — blending the Nigerian and British (Cambridge) approaches.",
    image: "/photos/academics-primary.jpg",
    imageAlt: "Primary pupils working together on a hands-on project",
    points: [
      "Blended Nigerian & British (Cambridge) curriculum",
      "Coding, robotics, science and creative arts",
      "Small classes with dedicated teachers",
      "Sports, clubs and leadership roles",
    ],
  },
  {
    id: "junior",
    name: "Junior Secondary",
    short: "JSS",
    age: "11 – 14 years",
    color: "mint",
    desc: "We guide pre-teens through big changes with structure, mentorship and subjects that stretch and inspire, preparing them thoroughly for the BECE.",
    image: "/photos/academics-junior.jpg",
    imageAlt: "Junior secondary students during a STEM activity",
    points: [
      "Broad JSS curriculum and BECE preparation",
      "STEM labs and project-based learning",
      "Coding & robotics with our New Horizons partnership",
      "Guidance, mentoring and wellbeing support",
    ],
  },
  {
    id: "senior",
    name: "Senior Secondary",
    short: "SSS",
    age: "14 – 17 years",
    color: "navy",
    desc: "Focused, ambitious preparation for WAEC and NECO — and for university and life beyond — with the character to match the grades.",
    image: "/photos/academics-senior.jpg",
    imageAlt: "Senior students in an ICT lesson",
    points: [
      "Science, Arts and Commercial tracks",
      "Rigorous WAEC / NECO examination preparation",
      "University and careers guidance",
      "Leadership, entrepreneurship and community projects",
    ],
  },
];

export type Value = { mark: string; title: string; desc: string; color: string };

export const values: Value[] = [
  { mark: "♥", title: "Safe & loving", color: "sky", desc: "A secure campus, caring routines and trained staff, so every child feels at home from the very first day." },
  { mark: "✿", title: "Creativity first", color: "sun", desc: "We identify and grow each child's innate abilities, turning lessons into adventures they genuinely enjoy." },
  { mark: "✦", title: "Small class sizes", color: "coral", desc: "More attention, more encouragement, and a teacher who truly knows your child by name." },
  { mark: "✎", title: "Qualified teachers", color: "mint", desc: "Trained, dedicated educators with ongoing professional development in every classroom." },
  { mark: "♪", title: "Culture & the arts", color: "navy", desc: "Music, drama, dance and cultural expression are woven through the week, not squeezed to the side." },
  { mark: "★", title: "Character & values", color: "sky", desc: "We raise kind, confident, responsible young people ready to lead and to solve real problems." },
];

// `num` is a fixed value; `sinceYear` instead computes "(this year − year)+"
// on the client so it stays current without a rebuild (see YearsSince).
export type Stat = { label: string; num?: string; sinceYear?: number };

export const stats: Stat[] = [
  { label: "Years of care", sinceYear: site.founded },
  { num: "100+", label: "Happy parents" },
  { num: "5", label: "School stages" },
  { num: "1000+", label: "Students & alumni" },
];

export type Testimonial = { quote: string; name: string; role: string; initial: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Creative Kids Academy has demonstrated exceptional educational impact on my child and its students. The comprehensive curriculum and open communication between teachers and parents create a truly supportive environment.",
    name: "Mrs Joy Alasoka",
    role: "Parent & former staff",
    initial: "A",
  },
  {
    quote:
      "To have my children attend Creative Kids is one of the best decisions I have ever made. At age three my son could already read his three- and four-letter words — they lovingly call him the ‘Little Prof’.",
    name: "Mrs Joel Kemie",
    role: "Parent",
    initial: "K",
  },
  {
    quote:
      "Creative Kids is a citadel of learning where no child is left out. The trained staff and conducive environment build every child's confidence and help discover their individual talents.",
    name: "Mrs Adeleke",
    role: "Parent & former staff",
    initial: "A",
  },
];

export type Step = { n: string; title: string; desc: string };

export const admissionSteps: Step[] = [
  { n: "1", title: "Enquire", desc: "Send us a message or give us a call, and tell us a little about your child." },
  { n: "2", title: "Apply", desc: "Complete the application form. Depending on the class, your child may sit a short assessment." },
  { n: "3", title: "Welcome!", desc: "Settle the fees and come in for a friendly settling-in visit — then your child joins the family." },
];

// Classes offered, grouped by stage — powers the admissions form dropdown.
// Secondary uses the British "Year" naming (Year 7 = JSS 1 … Year 11 = SSS 2).
// NOTE: confirm the primary/nursery names against the school's actual list.
export const classGroups: { stage: string; classes: string[] }[] = [
  { stage: "Crèche & Daycare", classes: ["Crèche"] },
  { stage: "Nursery & Pre-school", classes: ["Pre-Nursery", "Nursery 1", "Nursery 2", "Kindergarten"] },
  { stage: "Primary", classes: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"] },
  { stage: "Junior Secondary", classes: ["Year 7", "Year 8", "Year 9"] },
  { stage: "Senior Secondary", classes: ["Year 10", "Year 11"] },
];

export type Staff = {
  name: string;
  role: string;
  initial: string;
  color: string;
  photo?: string;
  lead?: boolean; // shown larger / first in the hierarchy
};

// The Director is featured separately via her message, so she's not in the grid.
// Ordered by seniority. Photos are placeholders — drop a real headshot in at the
// same path (e.g. public/staff/head-teacher.jpg) and it appears automatically.
export const team: Staff[] = [
  { name: "Mrs Qadri Omotola", role: "Head Teacher", initial: "Q", color: "sky", photo: "/staff/head-teacher.jpg", lead: true },
  { name: "Mrs Durowaye Sophia", role: "Assistant Head Teacher", initial: "D", color: "coral", photo: "/staff/assistant-head-teacher.jpg" },
  { name: "Mrs Anikoh Victoria", role: "Head of Nursery", initial: "V", color: "sun", photo: "/staff/head-nursery.jpg" },
  { name: "Miss Liliberth Ukagah", role: "Assistant Head of Nursery", initial: "L", color: "mint", photo: "/staff/assistant-head-nursery.jpg" },
  { name: "Mrs Olatunji Kemisola", role: "Head of Primary", initial: "K", color: "sky", photo: "/staff/head-primary.jpg" },
  { name: "Mr Abdul Azeez Taiwo", role: "Secondary Coordinator", initial: "T", color: "coral", photo: "/staff/secondary-coord.jpg" },
  { name: "Mr Aregbeshola Ridwan", role: "Examination Officer", initial: "R", color: "sun", photo: "/staff/exam-officer.jpg" },
  { name: "Mrs Gafar Momodu", role: "Admin Officer", initial: "M", color: "mint", photo: "/staff/admin-officer.jpg" },
];

// The Director's welcome address (from the live site, lightly tidied).
// Add `photo` once we have a headshot of the Director.
export const director: {
  name: string;
  role: string;
  initial: string;
  photo?: string;
  paragraphs: string[];
} = {
  name: "Mrs T. K. Adedeji",
  role: "Director",
  initial: "A",
  paragraphs: [
    "Dear Students, Parents, and Guardians, it gives me immense pleasure to welcome you all to our school. Creative Kids is an institution that believes in providing holistic education to every student, right from Playgroup to Secondary level — nurturing not just academic excellence, but character, social and emotional growth.",
    "We follow a comprehensive, innovative curriculum designed for the unique needs of every child, so each one can reach their full potential. Our faculty are highly qualified, experienced teachers who are passionate about guiding young minds in a safe, inclusive space where everyone is respected, valued and encouraged to grow.",
    "We understand that parents play a crucial role in their child's education, and we work to maintain constant communication and transparency, warmly encouraging families to take part in school life.",
    "We are committed to a quality education that equips our students for the challenges of the 21st century — confident that they will go on to become leaders and changemakers who make a positive impact on the world. Thank you for considering Creative Kids for your child; we look forward to welcoming you to our community.",
  ],
};

// Extracurricular activities — part of the wider curriculum, shown on Academics.
// `icon` is a lucide-react icon name (mapped to the component in the page).
export type Activity = { name: string; desc: string; icon: string; color: string };

export const activities: Activity[] = [
  { name: "Entrepreneur Club", desc: "Hands-on business and money skills that build confidence, creativity and real-world problem-solving.", icon: "Store", color: "sky" },
  { name: "Language Club", desc: "Mandarin, French and Hausa — opening children's ears and minds to the wider world.", icon: "Languages", color: "coral" },
  { name: "Coding & Robotics", desc: "Building and programming through our New Horizons partnership — tomorrow's skills today.", icon: "Bot", color: "mint" },
  { name: "Music, Drama & Arts", desc: "Singing, performance and cultural expression woven right through the school week.", icon: "Music", color: "sun" },
  { name: "Sports & House Competitions", desc: "Teamwork, fitness and friendly rivalry across our school houses.", icon: "Trophy", color: "sky" },
  { name: "Science & Discovery", desc: "Curious minds exploring how the world works, hands-on.", icon: "FlaskConical", color: "coral" },
];

export type Milestone = { year: string; title: string; desc: string };

export const timeline: Milestone[] = [
  { year: "2008", title: "Where it began", desc: "Creative Kids opens its doors to just four toddlers." },
  { year: "2016", title: "A fresh chapter", desc: "The school rebrands and grows, deepening its Montessori and Cambridge approach." },
  { year: "2020", title: "Fully accredited", desc: "The academy achieves full accreditation across its programmes." },
  { year: "2022", title: "Secondary launches", desc: "In September, Creative Kids Elementary & High School welcomes its first secondary students." },
];

// `date` is an ISO day (YYYY-MM-DD) so events can be sorted and auto-expired
// once the day passes — see the home Events slideshow and formatEventDate().
export type EventItem = {
  date: string;
  title: string;
  desc: string;
  color: string;
  image: string;
};

export const events: EventItem[] = [
  { date: "2026-08-09", title: "Open Day", desc: "Come and see the school for yourself — tour the campus, meet our teachers and explore the classrooms.", color: "sky", image: "/photos/campus.jpg" },
  { date: "2026-08-21", title: "Robotics & Art Exhibition", desc: "Our pupils showcase what they've built and created this term, from coding projects to canvas.", color: "sun", image: "/photos/stem-robotics.jpg" },
  { date: "2026-08-24", title: "Parents–Teachers Forum", desc: "An open conversation between families and staff about each child's progress and the term ahead.", color: "coral", image: "/photos/community-outreach.jpg" },
  { date: "2026-06-08", title: "Cultural Day", desc: "An open conversation between families and staff about each child's progress and the term ahead.", color: "mint", image: "/photos/community-outreach.jpg" },

];

export type GalleryItem = { src: string; label: string; wide?: boolean };

export const gallery: GalleryItem[] = [
  { src: "/photos/hero-cultural-day.jpg", label: "Cultural Day", wide: true },
  { src: "/photos/sports-day.jpg", label: "Inter-house Sports" },
  { src: "/photos/computer-lab.jpg", label: "Computer Lab" },
  { src: "/photos/stem-robotics.jpg", label: "STEM & Robotics" },
  { src: "/photos/entrepreneur-club.jpg", label: "Entrepreneur Club", wide: true },
  { src: "/photos/creative-play.jpg", label: "Creative Play" },
  { src: "/photos/arts-craft.jpg", label: "Arts & Craft" },
  { src: "/photos/independence-day.jpg", label: "Independence Day", wide: true },
  { src: "/photos/assembly.jpg", label: "Morning Assembly" },
  { src: "/photos/life-skills.jpg", label: "Life Skills" },
  { src: "/photos/community-outreach.jpg", label: "Community Outreach" },
  { src: "/photos/home-economics.jpg", label: "Home Economics" },
  { src: "/photos/science-lab.jpg", label: "Science & Discovery" },
  { src: "/photos/campus.jpg", label: "Our Campus", wide: true },
];

// Ordered accent colour helpers so icon tiles cycle through the palette.
export const iconColors = ["sky", "sun", "coral", "mint", "navy"] as const;
