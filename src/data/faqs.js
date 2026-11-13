// The official FAQ has 13 questions, but the answers were not readable from the public page.
// Only questions answerable from verified site content are included below.
// Paste the remaining official answers here (same shape) and they will appear automatically.
import { links } from "./links";

export const faqs = [
  {
    q: "What is CS50 AI?",
    a: "CS50 AI is a specialized adaptation of Harvard University's CS50 Introduction to Artificial Intelligence with Python, designed to introduce students to the fundamentals of AI. It covers machine learning, neural networks, natural language processing and search algorithms through hands-on projects.",
  },
  {
    q: "How do I enroll in CS50 AI?",
    a: "Registration for this edition has closed. Check the enrollment page for the latest status and links to future course announcements.",
    cta: { label: "Go to enrollment", href: links.enroll },
  },
  {
    q: "Where can I see what is taught each week?",
    a: "The five-week syllabus includes weekly topics and practical sessions, from Python and data foundations to applied machine learning projects.",
    cta: { label: "Open the full syllabus", href: links.syllabus },
  },
  {
    q: "Can I get a certificate from Harvard?",
    a: "Certification is handled by Harvard CS50. Details are on the official CS50 certificate page.",
    cta: { label: "CS50 certification", href: links.certificate },
  },
  {
    q: "Is there a code of conduct?",
    a: "Yes. Everyone taking part is expected to follow the CS50x Nepal Code of Conduct.",
    cta: { label: "Read the Code of Conduct", href: links.codeOfConduct },
  },
  {
    q: "Is there a previous edition of CS50x Nepal?",
    a: "Yes. The previous edition of CS50x Nepal has its own site.",
    cta: { label: "Visit the previous edition", href: links.previousEdition },
  },
];
