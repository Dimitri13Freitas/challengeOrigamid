import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Contato } from "./Components/Contato";
import { Produtos } from "./Components/Produtos";
import { Produto } from "./Components/Produto";
import { Footer } from "./Components/Footer";
import "./App.css";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produtos/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
