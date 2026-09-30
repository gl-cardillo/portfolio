import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Dancing_Script, Montserrat, Roboto } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --next-font-roboto: ${roboto.style.fontFamily};
          --next-font-montserrat: ${montserrat.style.fontFamily};
          --next-font-dancing: ${dancingScript.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MotionConfig reducedMotion="user">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MotionConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
