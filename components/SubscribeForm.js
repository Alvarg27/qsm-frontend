import React, { useState, useEffect } from "react";
import styles from "../styles/SubscribeForm.module.css";
import BeatLoader from "./BeatLoader";
import { FaCheckCircle } from "react-icons/fa";

export default function SubscribeForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();

  const handleSubscribe = async () => {
    setError(undefined);
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
      }),
    };
    try {
      const response = await fetch(
        "https://qsm-server.herokuapp.com/subscribe",
        requestOptions
      );
      const result = await response.json();
      if (response.status !== 200 && response.status !== 201) {
        console.error(result.message);
        setError(result.message);
      } else {
        setSuccess(true);
        setMessage(result.message);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.subscribeForm}>
      {success ? (
        <div className={styles.container}>
          <FaCheckCircle className={styles.checkIcon} />
          <h2 style={{ textAlign: "center", color: "white" }}>¡Listo!</h2>
          <p style={{ textAlign: "center", margin: "0" }}>{message}</p>
        </div>
      ) : (
        <div className={styles.container}>
          <p style={{ textAlign: "center" }}>
            <b>Suscríbete</b> y mantente informado del lanzamiento
          </p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            maxLength="64"
            autoComplete="given-name"
            placeholder="Nombre"
          ></input>
          <input
            onChange={(e) => setLastName(e.target.value)}
            maxLength="64"
            autoComplete="family-name"
            placeholder="Apellido"
          ></input>
          <input
            onChange={(e) => setEmail(e.target.value)}
            maxLength="254"
            autoComplete="email"
            placeholder="Correo elecrónico"
          ></input>
          <button
            onClick={() => handleSubscribe()}
            style={{ margin: "15px 0" }}
            className="primaryButton"
          >
            {loading ? <BeatLoader /> : <p>Suscribirme</p>}
          </button>
          {error ? <p className={styles.errorMessage}>¡{error}!</p> : ""}
        </div>
      )}
    </div>
  );
}
