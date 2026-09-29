import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const facts = [
  { value: "3+ years", label: "Professional experience" },
  { value: "Vue → React", label: "Leading a full codebase migration" },
  { value: "UK", label: "Location" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div id="about" className="flex bg-white dark:bg-black">
      <div className="pt-5 pb-12 mx-auto my-20 border-b border-slate-300">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ type: "tween", duration: 2.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-dancing text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
              <span className="bg-white dark:bg-black py-5">About me</span>
            </h2>
            <div className="font-montserrat text-center p-5 text-lg leading-8 mt-8 flex flex-col gap-4 max-w-3xl">
              <p>
                I&apos;m a front-end developer based in the UK with over three
                years of professional experience building with{" "}
                <strong>React</strong>, <strong>TypeScript</strong> and{" "}
                <strong>Next.js</strong>.
              </p>
              <p>
                At my current company, a SaaS company, I&apos;m the sole front-end
                developer: I&apos;m migrating the codebase from Vue and
                JavaScript to React and TypeScript, shipping product features
                end-to-end and keeping it all covered with Vitest and Cypress
                tests. I own the front end from architecture decisions through
                to delivery.
              </p>
              <p>
                I taught myself to code in 2021 through The Odin Project,
                Codecademy and an OpenClassrooms web developer bootcamp, and I
                still spend my spare time building side projects and learning
                new tools.
              </p>
            </div>
            <dl className="grid w-full max-w-3xl gap-4 mt-6 sm:grid-cols-3">
              {facts.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-gray-200 dark:border-neutral-800 p-5 text-center"
                >
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-montserrat text-3xl font-semibold">
                    {value}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
