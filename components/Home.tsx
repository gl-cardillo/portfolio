import { useMemo } from "react";
import { motion } from "framer-motion";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { Nav } from "./Nav";
import { particlesOptions } from "../utils/particles";
import { useMediaQuery } from "../utils/hooks";

const initParticles = async (engine: Engine) => {
  const { loadSlim } = await import("@tsparticles/slim");
  await loadSlim(engine);
};

function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 639px)");
  const options = useMemo(
    () =>
      particlesOptions(
        resolvedTheme === "light" ? "light" : "dark",
        isSmallScreen,
      ),
    [resolvedTheme, isSmallScreen],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="hero-particles"
        className="absolute inset-0"
        options={options}
      />
    </ParticlesProvider>
  );
}

export function Home() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div id="home" className="relative min-h-[100vh] bg-white dark:bg-black">
      {!reduceMotion && <ParticlesBackground />}
      <Nav />
      <div
        id="content"
        tabIndex={-1}
        className="flex justify-center h-[93vh] flex-col outline-none"
      >
        <motion.h1
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-gray-900 opacity-0 dark:text-white font-montserrat font-semibold text-[54px] 2xs:text-[70px] xs:text-[80px] z-10 ml-[20px] xs:ml-[55px] md:ml-[120px] leading-[1.05]"
        >
          Luca Cardillo
        </motion.h1>
        <motion.p
          animate={{ x: ["-10vw", "0vw"] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="relative z-10 text-black dark:text-white font-montserrat self-start whitespace-nowrap text-2xl 2xs:text-3xl ml-[20px] xs:ml-[55px] md:ml-[120px] mt-5"
        >
          Front-end developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.2 }}
          className="relative z-10 mt-10 flex flex-wrap gap-3 px-5 xs:px-0 xs:ml-[55px] md:ml-[120px] font-montserrat font-semibold"
        >
          <Link
            href="#projects"
            className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 transition-opacity hover:opacity-85"
          >
            View projects
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border border-black dark:border-white bg-white/70 dark:bg-black/70 text-black dark:text-white px-5 py-2.5 transition-colors hover:bg-white dark:hover:bg-black"
          >
            Get in touch
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-black dark:text-white underline-offset-4 hover:underline"
          >
            <FaFileDownload aria-hidden /> Download CV
          </a>
        </motion.div>
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
