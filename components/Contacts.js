import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { send } from "emailjs-com";

export function Contacts() {
  const [response, setResponse] = useState("");
  const schema = yup.object().shape({
    name: yup.string().required("I would like to know your name!"),
    email: yup.string().email().required("I need an email to answer you back"),
    message: yup.string().required("Nothing to say?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data) => {
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      data,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
      .then(() => {
        setResponse("Thanks! I will contact you shortly");
      })
      .catch(() => {
        setResponse("Sorry, try again later");
      });
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center text-white dark:text-black bg-black dark:bg-white   py-7"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-white dark:border-black leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-black dark:bg-white py-5">Contact me</span>
      </h2>
      <div className="flex flex-col items-center gap-2 pt-7">
        <h3 className="text-xl font-openSans pb-2">Send me a message !</h3>
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col w-[300px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name")}
            className="p-1 rounded-sm text-black dark:text-white dark:bg-black"
          />
          <p className="text-[12px] pt-1 pb-3">{errors?.name?.message}</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email")}
            className="p-1 rounded-sm text-black  dark:text-white dark:bg-black"
          />
          <p className="text-[12px] pt-1 pb-3">{errors?.email?.message}</p>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            {...register("message")}
            className="p-1 rounded-sm resize-none h-[100px] text-black  dark:text-white dark:bg-black"
          ></textarea>{" "}
          <p className="text-[12px] pt-1 pb-3">{errors?.message?.message}</p>
          <button
            type="submit"
            className="bg-white dark:bg-black text-black dark:text-white p-1 font-medium font-montserrat text-xl"
          >
            Send
          </button>
          <p className="self-center">{response}</p>
        </form>
      </div>{" "}
      <p className=" self-center my-5">
        <span className="text-lg">or</span>
      </p>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center gap-4 text-3xl ">
          <a
            href="https://www.linkedin.com/in/luca-cardillo-528229162"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gl-cardillo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="">
          <a
            href="mailto:justincaovan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg"
          >
            giovanniluca.cardillo@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
