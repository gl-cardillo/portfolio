import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiPassport, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import odinbook1 from "../public/images/theOdinbook1.webp";
import odinbook2 from "../public/images/theOdinbook2.webp";
import odinbook3 from "../public/images/theOdinbook3.webp";
import amazon1 from "../public/images/amazon-clone-1.webp";
import amazon2 from "../public/images/amazon-clone-2.webp";
import amazon3 from "../public/images/amazon-clone-3.webp";
import instapets1 from "../public/images/instapets1.webp";
import instapets2 from "../public/images/instapets2.webp";
import instapets3 from "../public/images/instapets3.webp";


export type Project = {
  title: string;
  category: string;
  images: StaticImageData[];
  description: string;
  stack: { icon: IconType; name: string }[];
  liveUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
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
