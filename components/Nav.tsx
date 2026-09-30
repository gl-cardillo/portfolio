import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useActiveSection, useMounted } from "../utils/hooks";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["home", ...navLinks.map(({ id }) => id)];

const listItem: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delayChildren: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const ThemeToggle = ({ barWidth }: { barWidth: number | null }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.7 }}
      style={{
        right: barWidth ?? 0,
        visibility: barWidth === null ? "hidden" : undefined,
      }}
      className="fixed top-4 z-50 flex h-8 w-[60px] items-center rounded-full border border-black/10 bg-white/80 p-1 shadow-md backdrop-blur-md transition-colors hover:border-black/30 dark:border-white/15 dark:bg-neutral-900/80 dark:hover:border-white/40"
    >
      <FiSun
        aria-hidden
        className="absolute left-2 text-sm text-gray-400 dark:text-neutral-500"
      />
      <FiMoon
        aria-hidden
        className="absolute right-2 text-sm text-gray-400 dark:text-neutral-500"
      />
      <motion.span
        aria-hidden
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black text-white shadow-sm dark:bg-white dark:text-black"
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && (
            <motion.span
              key={isDark ? "moon" : "sun"}
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {isDark ? (
                <FiMoon className="text-xs" />
              ) : (
                <FiSun className="text-xs" />
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
};

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLUListElement>(null);
  const [barWidth, setBarWidth] = useState<number | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new ResizeObserver(([entry]) =>
      setBarWidth(entry.borderBoxSize[0].inlineSize),
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape, a tap outside the nav, or scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const closeOnOutsideTap = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) close();
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideTap);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideTap);
      window.removeEventListener("scroll", close);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} aria-label="Main">
      <ThemeToggle barWidth={barWidth} />
      <motion.ul
        ref={barRef}
        initial="hidden"
        animate="visible"
        variants={listItem}
        className="fixed top-0 right-0 z-50 flex items-center gap-2 sm:gap-4 pl-3 sm:pl-5 pr-[3vw] h-16 text-white mix-blend-difference font-montserrat font-semibold text-[15px]"
      >
        {navLinks.map(({ id, label }) => (
          <motion.li key={id} variants={listItem} className="hidden sm:block">
            <Link
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className="rounded-sm px-1 py-1 decoration-2 underline-offset-8 hover:underline aria-[current=location]:underline"
            >
              {label}
            </Link>
          </motion.li>
        ))}
        <motion.li variants={listItem} className="sm:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-sm text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </motion.li>
      </motion.ul>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 flex flex-col gap-1 border-b border-gray-200 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm px-6 pt-16 pb-4 font-montserrat text-base font-semibold text-black dark:text-white sm:hidden"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? "location" : undefined}
                  className="block rounded-sm py-2.5 decoration-2 underline-offset-8 aria-[current=location]:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
