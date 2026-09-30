import { useState, type ReactNode } from "react";
import { FaEnvelope, FaRegCopy, FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { send } from "@emailjs/browser";
import { EMAIL, links } from "../data/contact";

const schema = yup.object({
  name: yup.string().required("I would like to know your name!"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("I need an email to answer you back"),
  message: yup.string().required("Nothing to say?"),
  website: yup.string(),
});

type ContactForm = yup.InferType<typeof schema>;

type Status = "idle" | "sending" | "sent" | "error";

const inputClassName =
  "w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-2.5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 transition-colors focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/30";

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      <p id={`${id}-error`} className="text-red-500 text-xs min-h-4">
        {error}
      </p>
    </div>
  );
};

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="shrink-0 rounded-lg p-2.5 text-gray-500 hover:text-black hover:bg-gray-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
    >
      {copied ? <FaCheck className="text-green-600" /> : <FaRegCopy />}
    </button>
  );
};

export const Contacts = () => {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const sendEmail = async ({ website, ...data }: ContactForm) => {
    if (website) {
      setStatus("sent");
      reset();
      return;
    }
    setStatus("sending");
    try {
      await send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        data,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY },
      );
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col dark:text-white text-black dark:bg-neutral-900 bg-white pt-16 pb-8 px-5"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-white dark:bg-neutral-900 py-5">Contact me</span>
      </h2>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-5 mt-12">
        <div className="min-w-0 md:col-span-2 flex flex-col gap-6">
          <div>
            <h3 className="font-montserrat font-semibold text-3xl leading-tight">
              Let&apos;s build something together
            </h3>
            <p className="mt-3 text-gray-600 dark:text-neutral-400 leading-relaxed">
              Send me a message or reach out directly and I&apos;ll get back to
              you as soon as I can.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-neutral-800 p-2 pr-1">
              <a
                href={`mailto:${EMAIL}`}
                className="flex flex-1 min-w-0 items-center gap-4 rounded-lg p-1 group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg dark:bg-neutral-800">
                  <FaEnvelope />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                    Email
                  </span>
                  <span className="block truncate font-medium group-hover:underline">
                    {EMAIL}
                  </span>
                </span>
              </a>
              <CopyEmailButton />
            </li>
            {links.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-neutral-800 p-3 transition-colors hover:border-gray-400 dark:hover:border-neutral-600 group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg dark:bg-neutral-800">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                      {label}
                    </span>
                    <span className="block truncate font-medium group-hover:underline">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(sendEmail)}
          noValidate
          className="min-w-0 md:col-span-3 flex flex-col gap-2 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-black/40 p-4 2xs:p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name?.message}>
              <input
                type="text"
                id="name"
                autoComplete="name"
                placeholder="Jane Smith"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                {...register("name")}
                className={inputClassName}
              />
            </Field>
            <Field id="email" label="Email" error={errors.email?.message}>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="jane@company.com"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                {...register("email")}
                className={inputClassName}
              />
            </Field>
          </div>
          <Field id="message" label="Message" error={errors.message?.message}>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me about the role or project…"
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              {...register("message")}
              className={`${inputClassName} resize-y`}
            />
          </Field>
          <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Leave this field empty</label>
            <input
              type="text"
              id="website"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p role="status" className="text-sm">
              {status === "sent" && (
                <span className="text-green-600 dark:text-green-500">
                  Thanks! I&apos;ll get back to you shortly.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500">
                  Something went wrong. Please email me directly instead.
                </span>
              )}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-montserrat font-semibold transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>

      <p className="mt-16 text-center text-sm text-gray-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Luca Cardillo
      </p>
    </section>
  );
};
