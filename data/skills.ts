import type { IconType } from "react-icons";
import { DiMongodb } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVitest,
  SiCypress,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type SkillGroup = {
  title: string;
  skills: { name: string; icon: IconType }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: FiFramer },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Vitest", icon: SiVitest },
      { name: "Cypress", icon: SiCypress },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: DiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "REST APIs", icon: TbApi },
      { name: "Linux", icon: SiLinux },
    ],
  },
];
