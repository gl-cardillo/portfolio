import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { motion, MotionConfig } from "framer-motion";
import {
  FaGithub,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaArrowRight,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiPassport, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import odinbook1 from "../public/images/theOdinbook1.png";
import odinbook2 from "../public/images/theOdinbook2.png";
import odinbook3 from "../public/images/theOdinbook3.png";
import amazon1 from "../public/images/amazon-clone-1.png";
import amazon2 from "../public/images/amazon-clone-2.png";
import amazon3 from "../public/images/amazon-clone-3.png";
import instapets1 from "../public/images/instapets1.png";
import instapets2 from "../public/images/instapets2.png";
import instapets3 from "../public/images/instapets3.png";

type Project = {
  title: string;
  category: string;
  images: StaticImageData[];
  description: string;
  stack: { icon: IconType; name: string }[];
  liveUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "The Odinbook",
    category: "Social network",
    images: [odinbook1, odinbook2, odinbook3],
    description:
      "A full-stack social media platform inspired by Facebook, where users can create an account and share posts. A React front end talks to a Node and MongoDB REST API, with Passport authentication and Jest tests.",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: SiPassport, name: "Passport" },
      { icon: SiJest, name: "Jest" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaAws, name: "AWS" },
    ],
    liveUrl: "https://odin-book-client-delta.vercel.app/",
    codeUrl: "https://github.com/gl-cardillo/the-odinbook",
  },
  {
    title: "Amazon Clone",
    category: "E-commerce",
    images: [amazon1, amazon2, amazon3],
    description:
      "A full-stack e-commerce app with authentication and account management. Users can browse products by category, leave reviews with ratings and manage their shopping cart.",
    stack: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
    liveUrl: "https://amazon-clone-phi-green.vercel.app/",
    codeUrl: "https://github.com/gl-cardillo/amazon-clone",
  },
  {
    title: "Instapets",
    category: "Social app",
    images: [instapets1, instapets2, instapets3],
    description:
      "Instagram, but for pets: owners create an account for their pets and share posts and pictures. Built with React and Firebase for authentication, storage and data.",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: IoLogoFirebase, name: "Firebase" },
      { icon: FaCss3Alt, name: "CSS" },
    ],
    liveUrl: "https://gl-cardillo.github.io/instapets/#/login",
    codeUrl: "https://github.com/gl-cardillo/instapets",
  },
];

function Screenshots({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const host = new URL(project.liveUrl).host;

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-950 shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-neutral-800 px-4 py-2.5">
          <div aria-hidden className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="flex-1 truncate rounded-md bg-white dark:bg-neutral-900 px-3 py-0.5 text-center text-xs text-gray-500 dark:text-neutral-400">
            {host}
          </span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          {project.images.map((image, index) => (
            <Image
              key={image.src}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className={`object-cover object-top transition-all duration-500 group-hover:scale-[1.02] ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {project.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${project.title} screenshot ${index + 1}`}
            aria-pressed={index === active}
            className={`relative aspect-[16/9] overflow-hidden rounded-lg border-2 transition ${
              index === active
                ? "border-black dark:border-white"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="200px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group grid items-center gap-8 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className={`lg:col-span-7 ${reversed ? "lg:order-last" : ""}`}>
        <Screenshots project={project} />
      </div>

      <div className="lg:col-span-5 flex flex-col gap-5 text-left">
        <div>
          <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 font-montserrat text-3xl font-semibold">
            {project.title}
          </h3>
        </div>

        <p className="leading-relaxed text-gray-700 dark:text-neutral-300">
          {project.description}
        </p>

        <ul aria-label="Built with" className="flex flex-wrap gap-2">
          {project.stack.map(({ icon: Icon, name }) => (
            <li
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-neutral-700 px-3 py-1 text-sm font-medium"
            >
              <Icon aria-hidden />
              {name}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 font-montserrat font-semibold transition-opacity hover:opacity-85"
          >
            Live demo <BiLinkExternal aria-hidden />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-neutral-700 px-5 py-2.5 font-montserrat font-semibold transition-colors hover:border-black dark:hover:border-white"
          >
            <FaGithub aria-hidden /> Source code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" className="bg-white dark:bg-black px-5 pb-16">
        <div className="flex flex-col items-center">
          <h2 className="font-dancing text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
            <span className="bg-white dark:bg-black py-5">Projects</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/gl-cardillo"
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-neutral-700 px-5 py-2.5 font-montserrat font-semibold transition-colors hover:border-black dark:hover:border-white"
          >
            <FaGithub aria-hidden className="text-xl" />
            More projects on GitHub
            <FaArrowRight
              aria-hidden
              className="text-sm transition-transform group-hover/link:translate-x-1"
            />
          </a>
        </div>
      </section>
    </MotionConfig>
  );
}
