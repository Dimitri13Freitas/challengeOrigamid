import React from "react";

export const Produtos = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((e) => setData(e));
  }, []);

  return (
    <div>
      <p>seila</p>
      <p></p>
    </div>
  );
};
