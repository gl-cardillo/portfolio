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
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";

export function Skills() {
  return (
    <div
      id="skills"
      className="bg-white flex flex-col m-auto text-center pt-16"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-white py-5">Skills</span>
      </h2>
      <div className="flex gap-12 flex-wrap justify-center">
        <div>
          <h3 className=" my-2 text-2xl pt-7 font-montserrat font-semibold">
            Front-end
          </h3>
          <div className="flex flex-wrap gap-6 p-5 rounded-lg w-[250px] shadow-[0_0_20px_1px_#9f9f9f] text-[80px] justify-center text-white bg-black">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
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
          <div className="flex flex-wrap gap-6 p-5 rounded-lg w-[250px] shadow-[0_0_20px_1px_#9f9f9f] text-[80px] justify-center text-white bg-black">
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
          <div className="flex flex-wrap gap-6 p-5 rounded-lg w-[250px] shadow-[0_0_20px_1px_#9f9f9f] text-[80px] justify-center text-white bg-black">
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
