import Head from "next/head";
import Image from "next/image";
import SubscribeForm from "../components/SubscribeForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>QSM</title>
        <meta
          name="description"
          content="Empresa queretana dedicada al diseño y desarollo de semiconductores para sensores y circuitos integrados"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <img src="/qsm-logo.webp" width="200px" heigth="100%" alt="qsm" />
          <h3>QSM semiconductores</h3>
          <p>
            Empresa queretana dedicada al diseño y desarollo de semiconductores
            para sensores y circuitos integrados
          </p>
          <h2>PRÓXIMAMENTE</h2>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
}
