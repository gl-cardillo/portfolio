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
      <main>{children}</main>
    </>
  );
}
