import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptionDark } from "../utils/particles";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";

export function Home() {
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
        className="absolute h-full w-full pt-10 bg-black"
        init={particlesInit}
        options={particlesOptionDark}
      />
      <div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={listItem}
          className="flex justify-end mix-blend-difference font-montserrat font-semibold z-50 gap-4 py-5 fixed top-0 left-0 w-[97vw]"
        >
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
              <a >
                Contact
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <div className="flex justify-center h-[93vh] flex-col">
        <motion.h1
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="font-montserrat font-semibold text-[70px] xs:text-[80px] z-10 ml-[20px] xs:ml-[55px] md:ml-[120px] leading-[75px]"
        >
          Luca Cardillo
        </motion.h1>
        <motion.p
          animate={{ x: ["-10vw", "7vw"] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="font-montserrat w-[300px] text-3xl md:ml-[30px] mt-5"
        >
          Fullstack developer
        </motion.p>
      </div>
      <motion.div
        animate={{ y: ["-0vh", "2vh", "-0vh"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center text-4xl"
      >
        <BsChevronDoubleDown />
      </motion.div>
    </div>
  );
}
