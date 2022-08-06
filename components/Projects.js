import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGithub,
  FaCode,
  FaEye,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiPassport, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function Projects() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  const slideOdinbook = [
    "/images/theOdinbook1.png",
    "/images/theOdinbook2.png",
    "/images/theOdinbook3.png",
  ];

  const slideInstapets = [
    "/images/instapets1.png",
    "/images/instapets2.png",
    "/images/instapets3.png",
  ];

  const slideAmazon = [
    "/images/amazon-clone-1.png",
    "/images/amazon-clone-2.png",
    "/images/amazon-clone-3.png",
  ];

  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="projects" className="bg-white">
      <div className="flex flex-col m-3 lg:mx-20 xl:mx-32 text-center bg-white">
        <h2
          ref={ref}
          className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black leading-[0.1em] my-5 mx-0 font-semibold"
        >
          <span className="bg-white py-5">Projects</span>
        </h2>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={inView && { x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-[0_0_20px_1px_#9f9f9f] self-start"
        >
          <h3 className="text-3xl mb-5 font-montserrat font-semibold">
            The Odinbook
          </h3>
          <Slider {...settings}>
            {slideOdinbook.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="rounded-md w-full"
              />
            ))}
          </Slider>
          <p className="m-5 font-roboto font-medium">
            The Odinbook is a project from The Odin project curriculum, the goal
            is to build a full-stack application similar to Facebook, where the
            user can create an account, make post etc.
          </p>
          <p className="flex gap-1 2xs:gap-2 justify-center items-center font-bold text-2xl">
            <span className=" text-sm 2xs:text-base 2xs:font-montserrat sm:text-lg">
              Made with:
            </span>
            <FaReact />
            <FaNodeJs />
            <DiMongodb />
            <SiPassport />
            <SiJest />
            <FaCss3Alt />{" "}
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://github.com/gl-cardillo/the-odinbook"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://the-odinbook.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>
        <p ref={ref2}></p>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={inView2 && { x: 0 }}
          transition={{ duration: 1.25 }}
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-[0_0_20px_1px_#9f9f9f] self-end"
        >
          <h3 className="text-3xl mb-5 font-montserrat font-semibold">
            Amazon clone
          </h3>
          <Slider {...settings}>
            {slideAmazon.map((image, index) => (
              <img src={image} className="rounded-md w-full" alt="" />
            ))}
          </Slider>
          <p className="m-5 font-roboto font-medium">
            This project is an Amazon clone, the user can browse throw
            categories and products, sign up, log in, log out, delete the
            account, add reviews with ratings, add products to the cart and
            remove them
          </p>
          <p className="flex gap-1 2xs:gap-2 justify-center items-center font-bold text-2xl">
            <span className="text-sm 2xs:text-base 2xs:font-montserrat sm:text-lg">
              {" "}
              Made with:
            </span>
            <SiNextdotjs />
            <SiTailwindcss />
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://amazon-clone-phi-green.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/gl-cardillo/amazon-clone"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>{" "}
        <p ref={ref3}></p>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={inView3 && { x: 0 }}
          transition={{ duration: 1.25 }}
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-[0_0_20px_1px_#9f9f9f] self-start"
        >
          <h3 className="text-3xl mb-5 font-montserrat font-semibold">
            Instapets
          </h3>{" "}
          <Slider {...settings}>
            {slideInstapets.map((image, index) => (
              <img src={image} className="rounded-md w-full" alt="" />
            ))}
          </Slider>
          <p className="m-5 font-roboto font-medium">
            Instapets is a project from The Odin project curriculum, the goal is
            to build a full-stack application similar to Instagram but for pets,
            where the user can create an account for the pets, post pictures
            etc.
          </p>
          <p className="flex gap-1 2xs:gap-2 justify-center items-center font-bold text-2xl">
            <span className="text-sm 2xs:text-base 2xs:font-montserrat sm:text-lg">
              {" "}
              Made with:
            </span>
            <FaReact />
            <IoLogoFirebase />
            <FaCss3Alt />
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://gl-cardillo.github.io/instapets/#/login"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/gl-cardillo/instapets"
              target="_blank"
              rel="noreferrer"
              className="px-1 py-2 rounded-lg text-white bg-black text-xl border border-black"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="border-b  border-slate-400 max-w-[500px] self-center py-7 mx-auto text-center flex flex-col  items-center gap-1 justify-center text-xl">
        <p>Want to see more projects?? Check my </p>{" "}
        <FaGithub className="text-3xl" />
      </div>
    </div>
  );
}
