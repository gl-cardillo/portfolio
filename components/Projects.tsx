import { useState } from "react";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { projects, type Project } from "../data/projects";


function Screenshots({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const host = new URL(project.liveUrl).host;

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-950 shadow-xs">
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
        <div className="relative aspect-video overflow-hidden">
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
            className={`relative aspect-video overflow-hidden rounded-lg border-2 transition ${
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
      className="group grid grid-cols-1 items-center gap-8 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8 shadow-xs transition-shadow hover:shadow-lg"
    >
      <div className={`min-w-0 lg:col-span-7 ${reversed ? "lg:order-last" : ""}`}>
        <Screenshots project={project} />
      </div>

      <div className="min-w-0 lg:col-span-5 flex flex-col gap-5 text-left">
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
          className="group/link inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-neutral-700 px-4 2xs:px-5 py-2.5 text-sm 2xs:text-base font-montserrat font-semibold transition-colors hover:border-black dark:hover:border-white"
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
  );
}
