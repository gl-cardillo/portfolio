import type { IconType } from "react-icons";
import { DiMongodb } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
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

type SkillGroup = {
  title: string;
  skills: { name: string; icon: IconType }[];
};

const skillGroups: SkillGroup[] = [
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
      { name: "CSS3", icon: SiCss3 },
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

export function Skills() {
  return (
    <div
      id="skills"
      className="bg-white dark:bg-black flex flex-col m-auto text-center py-16 px-5"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-white dark:bg-black py-5">Skills</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 w-full max-w-5xl mx-auto mt-12 pb-16 border-b border-slate-400 text-left">
        {skillGroups.map(({ title, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
          >
            <h3 className="font-montserrat text-xl font-semibold">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-neutral-700 px-3.5 py-1.5 font-medium"
                >
                  <Icon aria-hidden className="text-lg" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
