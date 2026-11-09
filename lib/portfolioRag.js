import { PROFILE } from "@/content/profile";

const stopWords = new Set([
  "a", "an", "and", "are", "about", "can", "do", "does", "for", "from", "how", "i", "in", "is", "me", "of", "on", "or", "the", "to", "what", "where", "who", "with", "you", "your",
]);

const documents = [
  {
    id: "about",
    title: "About Ebbad",
    href: "/about",
    tags: ["ebbad", "nazir", "about", "profile", "student", "mbbs", "who", "motivation", "values"],
    content: "Ebbad Nazir is a fourth-year Bachelor of Medicine, Bachelor of Surgery (MBBS) student at Rai Medical College, Sargodha, in the 2022-2027 session. His medical learning is guided by curiosity, continuous learning, patient-centered care, and a growing interest in surgery.",
  },
  {
    id: "education",
    title: "Education",
    href: "/education",
    tags: ["education", "study", "school", "college", "marks", "score", "matric", "fsc", "mbbs", "aggregate", "academic"],
    content: "Ebbad completed Matriculation (Science) from Taleem-ul-Islam School with 88% and F.Sc. (Pre-Medical) from Punjab College with 94%. He has an 83% MDCAT aggregate and is currently completing his Bachelor of Medicine, Bachelor of Surgery (MBBS) at Rai Medical College, Sargodha; 83% is not an MBBS progress score or degree GPA.",
  },
  {
    id: "clinical",
    title: "Clinical Experience",
    href: "/clinical-experience",
    tags: ["clinical", "internship", "hospital", "fgpc", "surgery", "department", "experience", "islamabad", "placement", "ward"],
    content: "Ebbad completed a Surgery Department internship at Federal Government Polyclinic Hospital (FGPC), Islamabad, recorded from 14 June to 15 July. The experience focused on observing surgical settings, clinical professionalism, healthcare teamwork, and patient-centered care.",
  },
  {
    id: "interests",
    title: "Interests & Vision",
    href: "/interests",
    tags: ["interest", "vision", "future", "career", "surgery", "surgeon", "specialty", "ambition", "goal"],
    content: "Surgery is Ebbad's primary specialty interest because it brings together detailed medical knowledge, technical precision, clinical judgment, and teamwork. His long-term ambition is to become an ethical, knowledgeable, and compassionate medical professional and pursue surgical training.",
  },
  {
    id: "public-health",
    title: "Public Health",
    href: "/interests",
    tags: ["public", "health", "epi", "immunization", "campaign", "prevention", "community", "awareness"],
    content: "Ebbad participated in an Expanded Programme on Immunization awareness initiative. It reinforced the importance of immunization awareness, preventive medicine, disease prevention, and community health education alongside clinical healthcare.",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
    tags: ["contact", "email", "phone", "linkedin", "reach", "message", "connect"],
    content: "To connect with Ebbad Nazir, use the contact page message form or the email, phone, and LinkedIn links in the site footer. The portfolio is based in Bhalwal, District Sargodha, Punjab, Pakistan.",
  },
];

function tokenize(value = "") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+.-]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !stopWords.has(word));
}

export function retrievePortfolioContext(query) {
  const terms = tokenize(query);
  if (!terms.length) return [];

  return documents
    .map((document) => {
      const corpus = `${document.title} ${document.tags.join(" ")} ${document.content}`.toLowerCase();
      const score = terms.reduce((total, term) => {
        if (document.tags.some((tag) => tag.includes(term) || term.includes(tag))) return total + 5;
        if (document.title.toLowerCase().includes(term)) return total + 3;
        return corpus.includes(term) ? total + 1 : total;
      }, 0);
      return { ...document, score };
    })
    .filter((document) => document.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

export function createPortfolioAnswer(query) {
  const matches = retrievePortfolioContext(query);

  if (!matches.length) {
    return {
      answer: "I can help with Ebbad Nazir's verified portfolio information only: his MBBS education, clinical experience, surgical interests, public-health involvement, or contact details. Please ask about one of these areas.",
      sources: [],
      suggestions: ["What is Ebbad studying?", "Tell me about the surgery internship", "What are his career interests?"],
    };
  }

  const primary = matches[0];
  const supporting = matches[1];
  const answer = supporting && supporting.score >= primary.score * 0.65
    ? `${primary.content}\n\nRelated portfolio context: ${supporting.content}`
    : primary.content;

  return {
    answer,
    sources: matches.map(({ id, title, href }) => ({ id, title, href })),
    suggestions: primary.id === "education"
      ? ["What is Ebbad's current MBBS year?", "Tell me about his clinical experience", "What is his specialty interest?"]
      : primary.id === "clinical"
        ? ["What did he learn during the internship?", "What is his surgical interest?", "Tell me about his education"]
        : ["What is Ebbad studying?", "Tell me about the surgery internship", "How can I contact Ebbad?"],
  };
}
