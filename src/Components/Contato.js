import React from "react";
import img from "../img/contato.jpg";
import { Head } from "./Head";
import styles from "./Contato.module.css";

export const Contato = () => {
  return (
    <div className={styles.container + " anim"}>
      <Head title="Contato" />
      <img src={img} alt="Máquina de escrever antiga" />
      <div>
        <h3>Entre em contato.</h3>
        <ul className={styles.lista}>
          <li>freitasdimitri7@gmail.com</li>
          <li>3232-3232</li>
          <li>Rua Seila da Silva, 13</li>
        </ul>
      </div>
    </div>
  );
};
