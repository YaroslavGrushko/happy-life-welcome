import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy life CMS</title>
        <meta
          name="description"
          content="Welcome page for Happy life CMS application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Happy life CMS!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/documentation">
            <div className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Happy life CMS features.</p>
            </div>
          </Link>

          <a href="/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>
              Learn about Happy life CMS in an interactive course with quizzes!
            </p>
          </a>

          <a href="/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover boilerplate example of Happy life CMS.</p>
          </a>

          <a href="/deploy" className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>How to deploy your Happy life CMS site to a public URL.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://yaroslavgrushko.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <span className={styles.Powered}>Happy Prog</span>
        </a>
      </footer>
    </div>
  );
}
