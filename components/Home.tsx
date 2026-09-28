import { useSyncExternalStore } from "react";
import { motion, type Variants } from "framer-motion";
import Particles, { type IParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptionDark, particlesOptionLight } from "../utils/particles";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import darthVader from "../public/images/darth-vader-white.png";
import { useTheme } from "next-themes";

const particlesInit: IParticlesProps["init"] = async (engine) => {
  await loadFull(engine);
};

const listItem: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delayChildren: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Home() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <div className="relative min-h-[100vh] text-white">
      {mounted && (
        <Particles
          className="absolute h-full w-full pt-10 bg-white dark:bg-black"
          init={particlesInit}
          options={
            theme === "light" ? particlesOptionLight : particlesOptionDark
          }
        />
      )}
      <div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={listItem}
          className="flex justify-end items-center mix-blend-difference font-montserrat font-semibold z-50 gap-2.5 text-xs 2xs:text-[13px] sm:gap-4 sm:text-[15px] py-5 fixed top-0 left-0 w-[97vw]"
        >
          <motion.li
            variants={listItem}
            className="relative flex flex-col items-center  overflow-hidden"
          >
            <div className="flex">
              <label className="inline-flex relative items-center  cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  aria-label="Toggle dark mode"
                  checked={mounted && theme === "dark"}
                  onChange={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                  }
                />
                <div className="w-8 h-4 bg-white rounded-full peer  peer-focus:ring-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4.5px]  after:bg-black after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
                <span className="ml-1 hidden sm:inline">
                  <Image src={darthVader} width={25} height={25} alt="" />
                </span>
              </label>
            </div>
          </motion.li>
          {navLinks.map(({ href, label }) => (
            <motion.li
              key={href}
              variants={listItem}
              whileHover={{ scale: 1.3 }}
            >
              <Link href={href}>{label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex justify-center h-[93vh] flex-col">
        <motion.h1
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-gray-900 opacity-0 dark:text-white font-montserrat font-semibold text-[70px] xs:text-[80px] z-10 ml-[20px] xs:ml-[55px] md:ml-[120px] leading-[75px]"
        >
          Luca Cardillo
        </motion.h1>
        <motion.p
          animate={{ x: ["-10vw", "7vw"] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-black dark:text-white font-montserrat w-[320px] text-3xl md:ml-[30px] mt-5"
        >
          Front-end developer
        </motion.p>
      </div>
      <motion.div
        animate={{ y: ["-0vh", "2vh", "-0vh"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center text-4xl text-black dark:text-white"
      >
        <BsChevronDoubleDown />
      </motion.div>
    </div>
  );
}
