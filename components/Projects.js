import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaCode, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiPassport, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function Projects() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

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
    <div id="projects" className="bg-white dark:bg-black">
      <div className="flex flex-col p-3 lg:px-20 xl:px-32 text-center">
        <h2
          ref={ref}
          className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold"
        >
          <span className="bg-white dark:bg-black py-5">Projects</span>
        </h2>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={inView && { x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-md self-start dark:bg-neutral-900 border border-gray-50 dark:border-none"
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
              href="https://odin-book-client-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-white dark:text-black bg-blue-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/gl-cardillo/the-odinbook"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-white dark:text-black bg-green-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
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
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-md self-end dark:bg-neutral-900 border border-gray-50 dark:border-none"
        >
          <h3 className="text-3xl mb-5 font-montserrat font-semibold">
            Amazon clone
          </h3>
          <Slider {...settings}>
            {slideAmazon.map((image, index) => (
              <img
                key={index}
                src={image}
                className="rounded-md w-full"
                alt=""
              />
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
            <DiMongodb />
            <SiTailwindcss />
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://amazon-clone-phi-green.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-white dark:text-black bg-blue-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/gl-cardillo/amazon-clone"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-white dark:text-black bg-green-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
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
          className="w-[90%] md:w-[70%] xl:w-[60%] p-2.5 rounded-lg mt-12 z-10 shadow-md self-start dark:bg-neutral-900 border border-gray-50 dark:border-none"
        >
          <h3 className="text-3xl mb-5 font-montserrat font-semibold">
            Instapets
          </h3>
          <Slider {...settings}>
            {slideInstapets.map((image, index) => (
              <img
                key={index}
                src={image}
                className="rounded-md w-full"
                alt=""
              />
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
              className="p-2 rounded-lg text-white dark:text-black bg-blue-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/gl-cardillo/instapets"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-white dark:text-black bg-green-600 dark:bg-white text-xl shadow hover:scale-110 transition-transform duration-300"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="border-b border-slate-400 max-w-[500px] self-center py-7 mx-auto  flex justify-center text-xl">
        <a
          href="https://github.com/gl-cardillo"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center border border-black dark:border-white p-2 px-4 rounded-full hover:scale-105"
        >
          See more on <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
