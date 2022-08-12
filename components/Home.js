import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptionDark, particlesOptionLight } from "../utils/particles";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "next-themes";


export function Home() {
  const { theme, setTheme } = useTheme();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const listItem = {
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


  return (
    <div className="relative min-h-[100vh] text-white">
      <Particles
        className="absolute h-full w-full pt-10 bg-black dark:bg-white"
        init={particlesInit}
        options={theme === "light" ? particlesOptionDark : particlesOptionLight}
      />
      <div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={listItem}
          className="flex justify-end items-center mix-blend-difference font-montserrat font-semibold z-50 gap-2 text-sm 2xs:gap-3.5 2xs:text-[15px] xs:gap-4 xs py-5 fixed top-0 left-0 w-[97vw]"
        >
          <motion.li variants={listItem} li className="relative flex flex-col items-center  overflow-hidden">
            <div className="flex">
              <label className="inline-flex relative items-center  cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={theme === "dark"}
                  readOnly
                />
                <div
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                  className="w-8 h-4 bg-white rounded-full peer  peer-focus:ring-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4.5px]  after:bg-black after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"
                ></div>
                <span className="ml-1 ">
                  <img
                    src="/images/darth-vader-white.png"
                    className="w-[25px] "
                    alt=""
                  />
                </span>
              </label>
            </div>
          </motion.li>
          <motion.li variants={listItem} whileHover={{ scale: 1.3 }}>
            <Link href="#about">
              <a>About</a>
            </Link>
          </motion.li>
          <motion.li variants={listItem} whileHover={{ scale: 1.3 }}>
            <Link href="#skills">
              <a>Skills</a>
            </Link>
          </motion.li>
          <motion.li variants={listItem} whileHover={{ scale: 1.3 }}>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </motion.li>
          <motion.li variants={listItem} whileHover={{ scale: 1.3 }}>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <div className="flex justify-center h-[93vh] flex-col">
        <motion.h1
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-white dark:text-black ont-montserrat font-semibold text-[70px] xs:text-[80px] z-10 ml-[20px] xs:ml-[55px] md:ml-[120px] leading-[75px]"
        >
          Luca Cardillo
        </motion.h1>
        <motion.p
          animate={{ x: ["-10vw", "7vw"] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-white dark:text-black font-montserrat w-[300px] text-3xl md:ml-[30px] mt-5"
        >
          Fullstack developer
        </motion.p>
      </div>
      <motion.div
        animate={{ y: ["-0vh", "2vh", "-0vh"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center text-4xl dark:text-black"
      >
        <BsChevronDoubleDown />
      </motion.div>
    </div>
  );
}
