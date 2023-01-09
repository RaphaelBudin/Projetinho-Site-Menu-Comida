import { useState, useEffect } from "react";
import { TituloLorem, TextoLorem } from "./helper/HelperFunctions";
import Navbar from "./components/navbar/Navbar";
import CardCinza from "./components/UI/CardCinza";
import CardBranco from "./components/UI/CardBranco";
import styles from "./App.module.css";
import FotoMesa from "./public/foto-mesa.jpg";
import {
  AllProductsContext,
} from "./context/lista-produtos-context";

const opcoesMenu = [
  { id: 1, nome: "Sushi", descricao: "Peixe cru, arroz e alga", valor: 22.99 },
  { id: 2, nome: "Schitzel", descricao: "Uma iguaria Alemâ", valor: 16.77 },
  {
    id: 3,
    nome: "Hamburguer",
    descricao: "Uma das poucas comidas americanas que você conhece",
    valor: 9.17,
  },
  {
    id: 4,
    nome: "Sopa Verde",
    descricao: "Couve em tiras, bacon, calabresa e azeite cozidos",
    valor: 12.75,
  },
];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    console.log("Carrinho: ", carrinho);
  }, [carrinho]);

  return (
    <AllProductsContext.Provider
      value={{
        opcoesMenu: opcoesMenu,
        carrinho: carrinho,
        atualizaQuantidadeHandler: atualizaQuantidadeHandler,
        excluiProdutoHandler: excluiProdutoHandler,
      }}
    >
        <Navbar />
        <div className={styles.mainContainer}>
          <img src={FotoMesa} className={styles.imagemFundo} alt="" />
          <CardCinza titulo={TituloLorem} descricao={TextoLorem} />
          <CardBranco
            addProductHandler={addProductHandler}
            itens={opcoesMenu}
          />
        </div>
    </AllProductsContext.Provider>
  );

  function addProductHandler(produtoSelecionado, qtdProdutoSelecionado) {
    if (verificaJaExiste(produtoSelecionado)) {
      const arrayAtualizado = somaQuantidad(
        produtoSelecionado,
        qtdProdutoSelecionado
      );
      setCarrinho(arrayAtualizado);
      return;
    }
    const novoProduto = {
      id: produtoSelecionado,
      quantidade: qtdProdutoSelecionado,
    };
    setCarrinho((prevState) => [...prevState, novoProduto]);
  }

  // Deixar idiomático: tem que receber o array via argumento
  function verificaJaExiste(itemID) {
    const produtoJaExiste = carrinho.find((op) => op.id === itemID);
    return produtoJaExiste ? true : false;
  }

  // Deixar idiomático: tem que receber o array via argumento
  function somaQuantidad(produtoSelecionado, quantidadeADD) {
    const arrayAtualizado = carrinho.map((item) => {
      if (item.id !== produtoSelecionado) return item;
      return { id: item.id, quantidade: +item.quantidade + +quantidadeADD };
    });
    return arrayAtualizado;
  }

  function atualizaQuantidadeHandler(IDprodutoSelecionado, novaQuantidade) {
    const arrayAtualizado = carrinho.map((item) => {
      if (item.id !== IDprodutoSelecionado) return item;
      return { ...item, quantidade: novaQuantidade };
    });
    setCarrinho(arrayAtualizado);
  }

  function excluiProdutoHandler(IDprodutoSelecionado){
    const arrayAtualizado = [...carrinho].filter(produto => produto.id !== IDprodutoSelecionado);
    setCarrinho(arrayAtualizado);
  }
}

export default App;
