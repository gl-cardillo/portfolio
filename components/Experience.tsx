import { entries } from "../data/experience";

export const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-black px-5 pt-4 pb-20">
      <div className="flex flex-col items-center">
        <h2 className="font-dancing text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
          <span className="bg-white dark:bg-black py-5">Experience</span>
        </h2>
      </div>
      <ol className="max-w-3xl mx-auto mt-14 border-l-2 border-gray-200 dark:border-neutral-800">
        {entries.map((entry) => (
          <li key={entry.role} className="relative pl-8 pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-black"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-montserrat text-2xl font-semibold">
                {entry.role}
                {entry.place && (
                  <>
                    {" "}
                    <span className="text-gray-500 dark:text-neutral-400">
                      · {entry.place}
                    </span>
                  </>
                )}
              </h3>
              {entry.dates && (
                <span className="rounded-full border border-gray-300 dark:border-neutral-700 px-3 py-0.5 text-sm font-medium">
                  {entry.dates}
                </span>
              )}
            </div>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              {entry.summary}
            </p>
            {entry.highlights.length > 0 && (
              <ul className="mt-4 flex flex-col gap-2 list-disc pl-5 marker:text-gray-400">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            {entry.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-gray-100 dark:bg-neutral-900 px-2.5 py-1 text-sm font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
