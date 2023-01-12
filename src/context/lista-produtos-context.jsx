import { useState, useEffect, createContext } from "react";

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

export const AllProductsContext = createContext({
  opcoesMenu: opcoesMenu,
  carrinho: [],
  addProductHandler: (produtoSelecionado, qtdProdutoSelecionado) => {},
  verificaJaExiste: (itemID)=>{},
  somaQuantidade: (produtoSelecionado, quantidadeADD)=>{},
  atualizaQuantidadeHandler: (IDprodutoSelecionado, novaQuantidade) => {},
  excluiProdutoHandler: (IDprodutoSelecionado) => {},
});

export function AllProductsContextProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [totalPedido, setTotalPedido] = useState();

  useEffect(() => {
    console.log("Carrinho: ", carrinho);
  }, [carrinho]);

  useEffect(() => {
    if (carrinho.length > 0) {
      const localTotalPedido = carrinho.reduce(
        (somaParcial, produtoAtual) => {
          const valorProdutoAtual = opcoesMenu.find(
            (x) => x.id === produtoAtual.id
          ).valor;
          return somaParcial + produtoAtual.quantidade * valorProdutoAtual;
        },
        0
      );
      setTotalPedido(localTotalPedido.toFixed(2));
    }
  }, []);


  function addProductHandler(produtoSelecionado, qtdProdutoSelecionado) {
    console.log("Add Product Handler");
    if (verificaJaExiste(produtoSelecionado)) {
      const arrayAtualizado = somaQuantidade(
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
  function somaQuantidade(produtoSelecionado, quantidadeADD) {
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

  function excluiProdutoHandler(IDprodutoSelecionado) {
    const arrayAtualizado = [...carrinho].filter(
      (produto) => produto.id !== IDprodutoSelecionado
    );
    setCarrinho(arrayAtualizado);
  }

  return (
    <AllProductsContext.Provider
      value={{
        opcoesMenu: opcoesMenu,
        carrinho: carrinho,
        totalPedido: totalPedido,
        addProductHandler: addProductHandler,
        verificaJaExiste: verificaJaExiste,
        somaQuantidade: somaQuantidade,
        atualizaQuantidadeHandler: atualizaQuantidadeHandler,
        excluiProdutoHandler: excluiProdutoHandler,
      }}
    >
      {children}
    </AllProductsContext.Provider>
  );
}

export default AllProductsContext;
