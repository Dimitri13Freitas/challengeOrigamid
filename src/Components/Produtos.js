import React from "react";
import { Item } from "./Item";
import { Head } from "./Head";
import styles from "./Produtos.module.css";

export const Produtos = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((e) => setData(e));
  }, []);

  return (
    <>
      <Head title="" />
      <div className={styles.container + " content anim"}>
        {data &&
          data.map((e) => (
            <Item
              src={e.fotos[0].src}
              className="slide"
              key={e.id}
              id={e.id}
              nome={e.nome}
            />
          ))}
      </div>
    </>
  );
};
