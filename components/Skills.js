import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaGithub,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiHeroku,
  SiJest,
  SiExpress,
  SiPug,
  SiPostgresql,
  SiPassport,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import { FiFramer } from "react-icons/fi";

export function Skills() {
  return (
    <div
      id="skills"
      className="bg-white dark:bg-black flex flex-col m-auto text-center py-16"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-white dark:bg-black py-5">Skills</span>
      </h2>
      <div className="flex gap-12 flex-wrap justify-center border-b border-slate-400 pb-10 w-fit m-auto">
        <div>
          <h3 className="my-2 text-2xl pt-7 font-montserrat font-semibold">
            Front-end
          </h3>
          <div className="flex flex-wrap gap-8 p-5 rounded-lg w-[250px] shadow-md border border-gray-50 dark:border-none text-[70px] justify-center text-black dark:text-white bg-white dark:bg-neutral-900">
            <FaHtml5 />
            <FaCss3Alt />
            <SiTypescript />
            <SiJavascript />
            <FaReact />
            <FiFramer />
            <SiNextdotjs />
            <SiTailwindcss />
          </div>
        </div>
        <div>
          <h3 className=" my-2 text-2xl pt-7 font-montserrat font-semibold">
            Back-end
          </h3>
          <div className="flex flex-wrap gap-8 p-5 rounded-lg w-[250px] shadow-md border border-gray-50 dark:border-none text-[70px] justify-center text-black dark:text-white bg-white dark:bg-neutral-900">
            <FaNodeJs />
            <DiMongodb />
            <SiExpress />
            <SiPug />
            <SiJest />
            <SiPostgresql />
            <SiPassport />
          </div>
        </div>
        <div>
          <h3 className=" my-2 text-2xl pt-7 font-montserrat font-semibold">
            Miscellaneous
          </h3>
          <div className="flex flex-wrap gap-8 p-5 rounded-lg w-[250px] shadow-md border border-gray-50 dark:border-none text-[70px] justify-center text-black dark:text-white bg-white dark:bg-neutral-900">
            <FaGitAlt />
            <FaGithub />
            <FaLinux />
            <IoLogoFirebase />
            <SiHeroku />
          </div>
        </div>
      </div>
    </div>
  );
}
