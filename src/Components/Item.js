import React from "react";
import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";

export const Item = ({ src, id, nome }) => {
  return (
    <Link className={styles.item} to={`produtos/${id}`}>
      <img src={src} alt={id} />
      <h2>{nome}</h2>
    </Link>
  );
};
