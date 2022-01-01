import styles from "./Home.module.scss";
import Head from "next/head";

export default function Documantaion() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Documantation</title>
        <meta
          name="description"
          content="Documantation for Happy Life CMS app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Happy life CMS!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>part 1</h2>
            <p>Find in-depth information about Happy life CMS features.</p>
          </div>

          <div className={styles.card}>
            <h2>part 2</h2>
            <p>Find in-depth information about Happy life CMS features.</p>
          </div>

          <div className={styles.card}>
            <h2>part 3</h2>
            <p>Find in-depth information about Happy life CMS features.</p>
          </div>

          <div className={styles.card}>
            <h2>part 4</h2>
            <p>Find in-depth information about Happy life CMS features.</p>
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
