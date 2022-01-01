import styles from "./Home.module.scss";
import Head from "next/head";

export default function Examples() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Examples</title>
        <meta
          name="description"
          content="Examples of Happy Life CMS app using"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Examples of Happy Life CMS app using</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>part 1</h2>
            <p>Find in-depth information about Happy life CMS using.</p>
          </div>

          <div className={styles.card}>
            <h2>part 2</h2>
            <p>Find in-depth information about Happy life CMS using.</p>
          </div>

          <div className={styles.card}>
            <h2>part 3</h2>
            <p>Find in-depth information about Happy life CMS using.</p>
          </div>

          <div className={styles.card}>
            <h2>part 4</h2>
            <p>Find in-depth information about Happy life CMS using.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://yaroslavgrushko.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span>Happy Prog</span>
        </a>
      </footer>
    </div>
  );
}
