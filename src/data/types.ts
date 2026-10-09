export type Reference = { author: string; title: string; publisher: string; year: string; url: string };
export type Section = { heading: string; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  category: string; // category id
  subcategory: string;
  summary: string;
  image?: { src: string; alt: string; credit: string };
  tags: string[];
  places: string[];
  people: string[];
  sections: Section[];
  deeper?: Section; // nivel avanzado
  keyConcepts: { term: string; definition: string }[];
  review: string[];
  references: Reference[];
  related: string[];
  dataNote?: string;
};

export type Category = { id: string; name: string; description: string; subcategories: string[] };

export type TimelineEvent = {
  year: string;
  period: string;
  title: string;
  context: string;
  consequences: string;
  article?: string;
};

export type QuizQuestion = {
  id: string;
  level: "básico" | "intermedio" | "avanzado";
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  article?: string;
};
