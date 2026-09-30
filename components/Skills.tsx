import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <div
      id="skills"
      className="bg-white dark:bg-black flex flex-col m-auto text-center py-16 px-5"
    >
      <h2 className="font-dancing self-center text-[50px] w-full max-w-[300px] text-center border-b border-black dark:border-white leading-[0.1em] my-5 mx-0 font-semibold">
        <span className="bg-white dark:bg-black py-5">Skills</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 w-full max-w-5xl mx-auto mt-12 pb-16 border-b border-slate-400 text-left">
        {skillGroups.map(({ title, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xs"
          >
            <h3 className="font-montserrat text-xl font-semibold">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-neutral-700 px-3.5 py-1.5 font-medium"
                >
                  <Icon aria-hidden className="text-lg" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
