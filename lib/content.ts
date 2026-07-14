// All page content for the site, kept in one typed place so copy lives
// apart from layout. Sourced from creativekids.ng (real school content).

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

export type Stat = { num: string; label: string };

export const stats: Stat[] = [
  { num: "15+", label: "Years of care" },
  { num: "100+", label: "Happy parents" },
  { num: "5", label: "School stages" },
  { num: "2 – 17", label: "Ages welcomed" },
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
  { n: "1", title: "Enquire", desc: "Send us a message or give us a call — tell us a little about your child." },
  { n: "2", title: "Visit us", desc: "Tour the campus, meet the teachers and see our classrooms in action." },
  { n: "3", title: "Apply", desc: "Complete a simple application and share your child's records." },
  { n: "4", title: "Welcome!", desc: "A friendly settling-in visit, then your child joins the family." },
];

export type Staff = { name: string; role: string; initial: string; color: string };

export const staff: Staff[] = [
  { name: "Mrs T. K. Adedeji", role: "Director", initial: "A", color: "navy" },
  { name: "Mrs Qadri Omotola", role: "Head Teacher", initial: "Q", color: "sky" },
  { name: "Mrs Anikoh Victoria", role: "Head of Nursery", initial: "V", color: "sun" },
  { name: "Mrs Olatunji Kemisola", role: "Head of Primary", initial: "K", color: "coral" },
  { name: "Mr Abdul Azeez Taiwo", role: "Secondary Coordinator", initial: "T", color: "mint" },
  { name: "Mrs Gafar Momodu", role: "Admin Officer", initial: "M", color: "sky" },
];

export const clubs: string[] = [
  "Entrepreneur Club",
  "Language Club — Mandarin, French & Hausa",
  "Coding & Robotics (New Horizons partnership)",
  "Music, drama & cultural arts",
  "Sports & house competitions",
  "Science & discovery",
];

export type Milestone = { year: string; title: string; desc: string };

export const timeline: Milestone[] = [
  { year: "2008", title: "Where it began", desc: "Creative Kids opens its doors to just four toddlers." },
  { year: "2016", title: "A fresh chapter", desc: "The school rebrands and grows, deepening its Montessori and Cambridge approach." },
  { year: "2020", title: "Fully accredited", desc: "The academy achieves full accreditation across its programmes." },
  { year: "2022", title: "Secondary launches", desc: "In September, Creative Kids Elementary & High School welcomes its first secondary students." },
];

export type EventItem = { date: string; title: string; desc: string; color: string };

export const events: EventItem[] = [
  { date: "June 9", title: "Open Day", desc: "Come and see the school for yourself — tour the campus, meet our teachers and explore the classrooms.", color: "sky" },
  { date: "June 21", title: "Robotics & Art Exhibition", desc: "Our pupils showcase what they've built and created this term, from coding projects to canvas.", color: "sun" },
  { date: "June 24", title: "Parents–Teachers Forum", desc: "An open conversation between families and staff about each child's progress and the term ahead.", color: "coral" },
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
