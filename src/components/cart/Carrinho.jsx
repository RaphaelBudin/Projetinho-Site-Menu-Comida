import { useContext, useEffect, useState } from "react";
import { AllProductsContext } from "../../context/lista-produtos-context";
import LinhaCarrinho from "./LinhaCarrinho";
import styles from "./Carrinho.module.css";

export default function Carrinho({ modalHandler }) {
  const todosProdutos = useContext(AllProductsContext);
  const [totalPedido, setTotalPedido] = useState();

  useEffect(() => {
    if (todosProdutos.carrinho.length > 0) {
      const localTotalPedido = todosProdutos.carrinho.reduce((somaParcial, produtoAtual) => {
        const valorProdutoAtual = todosProdutos.opcoesMenu.find(x => x.id === produtoAtual.id).valor;
        return somaParcial + produtoAtual.quantidade * valorProdutoAtual;
      }, 0);
      setTotalPedido(localTotalPedido.toFixed(2));
    }
  }, [todosProdutos]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Itens Carrinho</span>
        <span onClick={modalHandler}>❌</span>
      </div>

      <div className={styles.conteudo}>
        {todosProdutos.carrinho &&
          todosProdutos.carrinho.map((produto) => {
            return (
              <LinhaCarrinho
                key={produto.id}
                className={styles.linha}
                produto={produto}
                retornaPropriedadeObjeto={retornaPropriedadeObjeto}
                atualizaQuantidadeHandler={
                  todosProdutos.atualizaQuantidadeHandler
                }
                excluiProdutoHandler={todosProdutos.excluiProdutoHandler}
              />
            );
          })}
      </div>

      <div className={styles.total}>Total: {totalPedido}</div>
      <button onClick={fecharPedidoHandler}> Fechar Pedido </button>
    </div>
  );

  function retornaPropriedadeObjeto(objeto, propriedade) {
    const produto = todosProdutos.opcoesMenu.find(
      (prod) => prod.id === objeto.id
    );
    switch (propriedade) {
      case "nome":
        return produto.nome;
      case "descricao":
        return produto.descricao;
      case "valor":
        return produto.valor;
      default:
        return "Propriedade do switch não identificada";
    }
  }
  
  function fecharPedidoHandler(){
    alert("Pedido fechado!");
  }
}
