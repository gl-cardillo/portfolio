export type Entry = {
  role: string;
  place?: string;
  dates?: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const entries: Entry[] = [
  {
    role: "Front-end Developer",
    dates: "Apr 2023 – Present",
    summary: "Sole front-end developer at a SaaS company.",
    highlights: [
      "Migrating the existing codebase to React and TypeScript",
      "Implementing new product features end-to-end",
      "Writing and maintaining automated tests with Vitest and Cypress",
      "Working independently across all areas of the front end, from architecture decisions to delivery",
    ],
    tags: ["React", "TypeScript", "Vitest", "Cypress"],
  },
  {
    role: "Web Developer Bootcamp",
    place: "OpenClassrooms",
    summary: "Education & certification.",
    highlights: [],
    tags: [],
  },
];
