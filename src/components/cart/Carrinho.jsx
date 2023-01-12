import { useContext } from "react";
import { AllProductsContext } from "../../context/lista-produtos-context";
import styles from "./Carrinho.module.css";
import Total from "./Total";
import HeaderCarrinho from "./Header";
import Conteudo from "./Conteudo";
import Botoes from "./Botoes";

export default function Carrinho({ modalHandler }) {
  const contextoProdutos = useContext(AllProductsContext);

  return (
    <div className={styles.container}>
      <HeaderCarrinho modalHandler={modalHandler}/>
      <Conteudo contextoProdutos={contextoProdutos} retornaPropriedadeObjeto={retornaPropriedadeObjeto}/>
      <Total totalPedido={contextoProdutos.totalPedido}/>
      <Botoes modalHandler={modalHandler} fecharPedidoHandler={fecharPedidoHandler}/>
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
