// Shared site metadata, internal routes, and external resources.
export const site = {
  name: "CS50x Nepal",
  course: "CS50 AI with Python",
  tagline: "The golden duck has returned.",
  description:
    "Explore CS50 AI with Python at CS50x Nepal, with a practical syllabus in Python, data science, and artificial intelligence at IOE Purwanchal Campus.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cs50xnepal.ioepc.edu.np",
};

export const links = {
  enroll: "/enroll",
  syllabus: "/syllabus",
  localTeam: "/team",
  codeOfConduct: "/code-of-conduct",
  hackathon: "https://cs50xnepal.ioepc.edu.np/hackathon",
  excess: "https://excess.ioepc.edu.np/",
  previousEdition: "https://cs50xnepal.vercel.app/",
  harvardCourse: "https://cs50.harvard.edu/ai/",
  certificate: "https://cs50.harvard.edu/ai/certificate/",
  youtube: "https://www.youtube.com/@cs50xnepal",
  facebook: "https://www.facebook.com/profile.php?id=61554706883546&mibextid=kFxxJD",
  x: "https://x.com/CS50xNepal?t=zhIVQxpn57jrtVVsYZJG0w&s=09",
  linkedin: "https://www.linkedin.com/company/cs50x-nepal/",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Course", href: "/course" },
  { label: "Syllabus", href: "/syllabus" },
  { label: "Team", href: "/team" },
  { label: "Stories", href: "/stories" },
  { label: "FAQs", href: "/faqs" },
];

export const footerGroups = [
  {
    title: "Reference sites",
    items: [
      { label: "Harvard CS50", href: "https://cs50.harvard.edu/ai/2024/" },
      { label: "IOE Purwanchal Campus", href: "https://www.ioepc.edu.np/" },
      { label: "EXCESS Nepal", href: "https://excess.ioepc.edu.np/" },
      { label: "Robotics Club", href: "https://robotics.ioepc.edu.np/" },
    ],
  },
  {
    title: "Useful links",
    items: [
      { label: "Code of Conduct", href: links.codeOfConduct },
      { label: "CS50 AI Syllabus", href: links.syllabus },
      { label: "Local Team", href: links.localTeam },
      { label: "CS50 Certification", href: links.certificate },
    ],
  },
  {
    title: "Useful tools",
    items: [
      { label: "Visual Studio Code", href: "https://vscode.dev/" },
      { label: "CS50 IDE", href: "https://cs50.ai" },
      { label: "CS50 Ed Discussions", href: "https://edstem.org/us/courses/176/discussion/" },
      { label: "Gradebook", href: "https://cs50.me/cs50x" },
    ],
  },
];

