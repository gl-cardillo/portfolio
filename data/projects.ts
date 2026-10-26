import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaReact, FaNodeJs, FaAws, FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {  SiNextdotjs, SiTailwindcss, SiTypescript, SiReactquery, SiExpress, SiJsonwebtokens, SiVitest, SiCypress } from "react-icons/si";
import odinbook1 from "../public/images/odinbook-profile-dark.png";
import odinbook2 from "../public/images/odinbook-feed-light.png";
import odinbook3 from "../public/images/odinbook-notifications-dark.png";
import storefront1 from "../public/images/storefront-home-light.png";
import storefront2 from "../public/images/storefront-product-dark.png";
import storefront3 from "../public/images/storefront-category-light.png";
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
    title: "Storefront",
    category: "E-commerce",
    images: [storefront1, storefront2, storefront3],
    description:
      "A full-stack e-commerce demo with accounts, a persistent basket and product reviews. Browse by category, search with live suggestions, rate products and switch between light and dark mode. Accessible, responsive and covered by end-to-end tests.",
    stack: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
    liveUrl: "https://glc-storefront.vercel.app/",
    codeUrl: "https://github.com/gl-cardillo/storefront",
  },
{
  title: "The Odinbook",
  category: "Social network",
  images: [odinbook1, odinbook2, odinbook3],
  description:
    "A full-stack social media platform inspired by Facebook, where users can create an account, share posts, comment, add friends and get notifications. A TypeScript monorepo: a React and TanStack Query front end talks to an Express and MongoDB REST API with JWT authentication and S3 image uploads, tested with Vitest and Cypress.",
  stack: [
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: SiReactquery, name: "TanStack Query" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: SiJsonwebtokens, name: "JWT" },
    { icon: SiVitest, name: "Vitest" },
    { icon: SiCypress, name: "Cypress" },
    { icon: FaSass, name: "Sass" },
    { icon: FaAws, name: "AWS" },
  ],
  liveUrl: "https://odin-book-client-delta.vercel.app/",
  codeUrl: "https://github.com/gl-cardillo/the-odinbook",
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
