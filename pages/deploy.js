import styles from "./Home.module.scss";
import Head from "next/head";

export default function Deploy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deploy</title>
        <meta
          name="description"
          content="Description of Happy Life CMS app deploying"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Happy life CMS deploying!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>part 1</h2>
            <p>Find in-depth information about Happy life CMS deploying.</p>
          </div>

          <div className={styles.card}>
            <h2>part 2</h2>
            <p>Find in-depth information about Happy life CMS deploying.</p>
          </div>

          <div className={styles.card}>
            <h2>part 3</h2>
            <p>Find in-depth information about Happy life CMS deploying.</p>
          </div>

          <div className={styles.card}>
            <h2>part 4</h2>
            <p>Find in-depth information about Happy life CMS deploying.</p>
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
