import React from "react";
import styles from "../styles/Background.module.css";
import { FaMicrochip } from "react-icons/fa";

export default function Background() {
  return (
    <div className={styles.Background}>
      <ul className={styles.circles}>
        <li>
          <FaMicrochip />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
