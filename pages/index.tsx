import Head from "next/head";
import styles from "./index.module.css";
import { elementIdConfig, webConfig } from "@/config";
import About from "@/page_components/About";
import Skills from "@/page_components/Skills";
import Contact from "@/page_components/Contact";
import Projects from "@/page_components/Projects";
export default function Home() {
  return (
    <>
      <Head>
        <title>{webConfig?.full_name}</title>
        <meta name="description" content={webConfig?.details} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`${webConfig?.url}metaimage.jpeg`} />
        <link rel="icon" href="/code.png" />
      </Head>
      <main className={styles.main}>
        <About id={elementIdConfig?.about} />
        <Skills id={elementIdConfig?.skills} />
        <Projects id={elementIdConfig?.projects} />
        <Contact id={elementIdConfig?.contact} />
      </main>
    </>
  );
}
