import styles from "./Home.module.scss";
import Head from "next/head";

export default function Learn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn</title>
        <meta name="description" content="Learn how to use Happy Life CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Happy life CMS learning!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>part 1</h2>
            <p>Find in-depth information about how to use Happy life CMS.</p>
          </div>

          <div className={styles.card}>
            <h2>part 2</h2>
            <p>Find in-depth information about how to use Happy life CMS.</p>
          </div>

          <div className={styles.card}>
            <h2>part 3</h2>
            <p>Find in-depth information about how to use Happy life CMS.</p>
          </div>

          <div className={styles.card}>
            <h2>part 4</h2>
            <p>Find in-depth information about how to use Happy life CMS.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <a
          href="https://yaroslavgrushko.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.Powered}> Happy Prog</span>
        </a>
      </footer>
    </div>
  );
}
