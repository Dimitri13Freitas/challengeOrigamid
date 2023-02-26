import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.nav}>
      <NavLink className="link" to="/" end>
        Produtos
      </NavLink>
      <NavLink className="link" to="contato">
        Contato
      </NavLink>
    </div>
  );
};
