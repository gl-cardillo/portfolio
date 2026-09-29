import Head from "next/head";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Luca Cardillo — Front-end Developer</title>
        <meta
          name="description"
          content="UK-based front-end developer with 3+ years of professional experience building with React, TypeScript and Next.js."
        />
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Skip to content
      </a>
      <main>{children}</main>
    </>
  );
}
