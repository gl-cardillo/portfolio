import Image, { type StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGithub,
  FaCode,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiJest,
  SiPassport,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
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
  images: StaticImageData[];
  description: string;
  stack: { icon: IconType; name: string }[];
  liveUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "The Odinbook",
    images: [odinbook1, odinbook2, odinbook3],
    description:
      "The Odinbook is a project from The Odin project curriculum, the goal is to build a full-stack application similar to Facebook, where the user can create an account, make post etc.",
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
    title: "Amazon clone",
    images: [amazon1, amazon2, amazon3],
    description:
      "This project is an Amazon clone, the user can browse through categories and products, sign up, log in, log out, delete the account, add reviews with ratings, add products to the cart and remove them",
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
    images: [instapets1, instapets2, instapets3],
    description:
      "Instapets is a project from The Odin project curriculum, the goal is to build a full-stack application similar to Instagram but for pets, where the user can create an account for the pets, post pictures etc.",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: IoLogoFirebase, name: "Firebase" },
      { icon: FaCss3Alt, name: "CSS" },
    ],
    liveUrl: "https://gl-cardillo.github.io/instapets/#/login",
    codeUrl: "https://github.com/gl-cardillo/instapets",
  },
];

const sliderSettings: Settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 2000,
  fade: true,
  autoplaySpeed: 3000,
  arrows: false,
};

function ProjectCard({
  project,
  align,
  duration,
}: {
  project: Project;
  align: "start" | "end";
  duration: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex mt-12 ${align === "start" ? "justify-start" : "justify-end"}`}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={inView ? { x: 0 } : undefined}
        transition={{ duration }}
        className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg z-10 shadow-md dark:bg-neutral-900 border border-gray-50 dark:border-none"
      >
        <h3 className="text-3xl mb-5 font-montserrat font-semibold">
          {project.title}
        </h3>
        <Slider {...sliderSettings}>
          {project.images.map((image, index) => (
            <Image
              key={image.src}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              placeholder="blur"
              sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
              className="rounded-md w-full h-auto"
            />
          ))}
        </Slider>
        <p className="m-5 font-roboto font-medium">{project.description}</p>
        <p className="flex gap-1 2xs:gap-2 justify-center items-center font-bold text-2xl">
          <span className="text-sm 2xs:text-base 2xs:font-montserrat sm:text-lg">
            Made with:
          </span>
          {project.stack.map(({ icon: Icon, name }) => (
            <Icon key={name} title={name} />
          ))}
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="p-2 rounded-lg text-white dark:text-black bg-blue-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
          >
            <BiLinkExternal />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
            className="p-2 rounded-lg text-white dark:text-black bg-green-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
          >
            <FaCode />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <div id="projects" className="bg-white dark:bg-black">
      <div className="flex flex-col p-3 lg:px-20 xl:px-32 text-center">
        <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
          <span className="bg-white dark:bg-black py-5">Projects</span>
        </h2>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            align={index % 2 === 0 ? "start" : "end"}
            duration={index === 0 ? 1.5 : 1.25}
          />
        ))}
      </div>
      <div className="border-b border-slate-400 max-w-[500px] self-center py-7 mx-auto  flex justify-center text-xl">
        <a
          href="https://github.com/gl-cardillo"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center border border-black dark:border-white p-2 px-4 rounded-full hover:scale-105"
        >
          See more on <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
