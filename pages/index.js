import Head from "next/head";
import Image from "next/image";
import SubscribeForm from "../components/SubscribeForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles.home}>
      <Head>
        <title>QSM</title>
        <meta
          name="description"
          content="Empresa queretana dedicada al diseño y desarollo de semiconductores para sensores y circuitos integrados"
        />
        <link rel="icon" href="/qsm-icon.webp" />
      </Head>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <img src="/qsm-logo.webp" width="100px" heigth="100%" alt="qsm" />
            <h3>QSM semiconductores</h3>
            <p>
              Empresa queretana dedicada al diseño y desarollo de
              semiconductores para sensores y circuitos integrados
            </p>
            <h2>PRÓXIMAMENTE</h2>
          </div>
        </div>
        <SubscribeForm />
      </div>
      <div className={styles.footer}>
        <p className="copyright">
          © {year} <b>QSM</b> | powered by <b>tectify.io</b> | Todos los
          derechos reservados
        </p>
      </div>
    </div>
  );
}
