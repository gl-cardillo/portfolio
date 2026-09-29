import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default MyApp;
