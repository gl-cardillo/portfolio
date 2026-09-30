import Head from "next/head";
import type { ReactNode } from "react";

const SITE_URL = "https://luca-cardillo.com";
const title = "Luca Cardillo — Front-end Developer";
const description =
  "UK-based front-end developer with 3+ years of professional experience building with React, TypeScript and Next.js.";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Luca Cardillo" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Luca Cardillo, Front-end developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Skip to content
      </a>
      <main>{children}</main>
    </>
  );
}
