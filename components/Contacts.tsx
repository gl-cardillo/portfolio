import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { send } from "emailjs-com";

const EMAIL = "giovanniluca.cardillo@gmail.com";

const schema = yup.object({
  name: yup.string().required("I would like to know your name!"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("I need an email to answer you back"),
  message: yup.string().required("Nothing to say?"),
});

type ContactForm = yup.InferType<typeof schema>;

const inputClassName =
  "shadow block px-2.5 pb-1.5 pt-2 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

export function Contacts() {
  const [response, setResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: ContactForm) => {
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
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
      className="flex flex-col justify-center dark:text-white text-black dark:bg-neutral-900 bg-white py-7"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b dark:border-white border-black leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="dark:bg-neutral-900 bg-white py-5">Contact me</span>
      </h2>
      <div className="flex flex-col items-center gap-2 pt-7">
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-0.5 w-[300px]"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              autoComplete="name"
              {...register("name")}
              className={inputClassName}
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-neutral-900 px-2 peer-focus:px-1 peer-focus:left-1.5 peer-placeholder-shown:-translate-y-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
            <p className="text-red-500 text-xs pt-0.5 h-[20px]">
              {errors.name?.message}
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              autoComplete="email"
              {...register("email")}
              className={inputClassName}
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-100 z-10 origin-[0] bg-white dark:bg-neutral-900 px-2 peer-focus:px-1 peer-focus:left-1.5 peer-placeholder-shown:-translate-y-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
            <p className="text-red-500 text-xs pt-0.5 h-[20px]">
              {errors.email?.message}
            </p>
          </div>
          <div className="relative">
            <textarea
              id="message"
              {...register("message")}
              className={inputClassName}
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-100 z-10 origin-[0] bg-white dark:bg-neutral-900 px-2 peer-focus:px-1 peer-focus:left-1.5 peer-placeholder-shown:-translate-y-8 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Message
            </label>
            <p className="text-red-500 text-xs pt-0.5 h-[20px]">
              {errors.message?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-900 text-white dark:text-white p-1 font-medium font-montserrat text-xl rounded shadow"
          >
            Send
          </button>
          <p className="self-center">{response}</p>
        </form>
      </div>
      <p className="self-center my-3">
        <span className="text-lg">or</span>
      </p>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center gap-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/luca-cardillo-528229162"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gl-cardillo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a href={`mailto:${EMAIL}`} className="text-lg">
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
