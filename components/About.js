import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export function About() {
  const { ref, inView } = useInView();
  const animationOpacity = useAnimation();

  useEffect(() => {
    if (inView) {
      animationOpacity.start({
        opacity: 1,
        transition: { type: "tween", duration: 2.5 },
      });
    } else {
      animationOpacity.start({  opacity: 0 });
    }
  }, [inView]);

  return (
    <div id="about" className="flex bg-white">
      <div className="pt-5 pb-3 mx-5 my-20 border-b border-slate-300 lg:mx-[250px] xl:mx-[300px] 2xl:mx-[500px] 3xl:mx-[700px] ">
        <div ref={ref}>
          <motion.div
            animate={animationOpacity}
            className="flex flex-col items-center"
          >
            <h2 className=" font-dancing text-[50px] w-full max-w-[300px] text-center border-b border-black leading-[0.1em] my-5 mx-0 font-semibold">
              <span className="bg-white py-5">About me</span>
            </h2>
            <p className="font-montserrat text-center p-5 rounded-bl-md font-semibold text-xl leading-7 mt-8">
              I am a self-taught full stack developer based in London.As someone
              with a keen interest in tech, critical thinking, and
              problem-solving I decided in September 2021 to learn about coding
              and I fall in love with it, studying from resources such as
              Codecademy, The Odin Project, and Leetcode, I have become
              confident developing full stack applications with the MERN stack.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
