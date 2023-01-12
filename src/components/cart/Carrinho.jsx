import { useContext, useEffect, useState } from "react";
import { AllProductsContext } from "../../context/lista-produtos-context";
import LinhaCarrinho from "./LinhaCarrinho";
import styles from "./Carrinho.module.css";

export default function Carrinho({ modalHandler }) {
  const contextoProdutos = useContext(AllProductsContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Itens Carrinho</span>
        <span onClick={modalHandler}>❌</span>
      </div>

      <div className={styles.conteudo}>
        {contextoProdutos.carrinho &&
          contextoProdutos.carrinho.map((produto) => {
            return (
              <LinhaCarrinho
                key={produto.id}
                className={styles.linha}
                produto={produto}
                retornaPropriedadeObjeto={retornaPropriedadeObjeto}
                atualizaQuantidadeHandler={
                  contextoProdutos.atualizaQuantidadeHandler
                }
                excluiProdutoHandler={contextoProdutos.excluiProdutoHandler}
              />
            );
          })}
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <span className={styles.totalPedido}>R$ {contextoProdutos.totalPedido}</span>
      </div>
      <div className={styles.linhaBotoes}>
        <button className={styles.botaoFecharCarrinho} onClick={modalHandler}>
          Fechar
        </button>
        <button
          className={styles.botaoFazerPedido}
          onClick={fecharPedidoHandler}
        >
          Fazer Pedido
        </button>
      </div>
    </div>
  );

  function retornaPropriedadeObjeto(objeto, propriedade) {
    const produto = contextoProdutos.opcoesMenu.find(
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

  function fecharPedidoHandler() {
    alert("Pedido fechado!");
  }
}
