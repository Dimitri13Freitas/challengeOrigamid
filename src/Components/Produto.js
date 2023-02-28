import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";

export const Produto = () => {
  const { id } = useParams();
  const [itemData, setItemData] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    try {
      setLoad(true);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        .then((r) => r.json())
        .then((e) => setItemData(e));
      setLoad(false);
    } catch (err) {
      setErro("Ocorreu um erro");
    }
  }, [id]);
  if (erro) return <p>{erro}</p>;
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
        {itemData.fotos.length > 1 ? (
          <>
            <div>
              <p className={styles.descR}>{itemData.descricao}</p>
            </div>
            <img src={itemData.fotos[1].src} alt="" />
          </>
        ) : null}
      </div>
    );
  } else {
    return <div className={styles.load}></div>;
  }
};
