import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";

export const Produto = () => {
  const { id } = useParams();
  const [itemData, setItemData] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((r) => r.json())
      .then((e) => setItemData(e));
  }, [id]);
  if (itemData) {
    return (
      <div className={styles.container}>
        <img src={itemData.fotos[0].src} alt="" />
        <div>
          <h2>{itemData.nome}</h2>
          <p className={styles.preco}>{"R$ " + itemData.preco}</p>
          <p className={styles.desc}>{itemData.descricao}</p>
          <button>Comprar</button>
        </div>
        <div>
          <p className={styles.descR}>{itemData.descricao}</p>
        </div>
        <img src={itemData.fotos[1].src} alt="" />
      </div>
    );
  } else {
    return null;
  }
};
