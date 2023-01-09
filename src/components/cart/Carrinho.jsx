import { useContext } from "react";
import {
  AllProductsContext,
  ProductContext,
} from "../../context/lista-produtos-context";
import styles from "./Carrinho.module.css";

export default function Carrinho({ modalHandler }) {
  const produtosCarrinho = useContext(ProductContext);
  const opcoesMenu = useContext(AllProductsContext);

  function retornaPropriedadeObjeto(objeto, propriedade) {
    const produto = opcoesMenu.find((prod) => prod.id === objeto.id);
    switch (propriedade) {
      case "nome":      return produto.nome;
      case "descricao": return produto.descricao;
      case "valor":     return produto.valor;
      default:          return "Propriedade do switch não identificada";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Itens Carrinho</span>
        <span onClick={modalHandler}>❌</span>
      </div>
      <div className={styles.conteudo}>
        {produtosCarrinho &&
          produtosCarrinho.map((produto) => {
            return (
              <div key={produto.id} value={produto}>
                <p> {retornaPropriedadeObjeto(produto, "nome")} </p>
                <p> {retornaPropriedadeObjeto(produto, "descricao")} </p>
                <p> {retornaPropriedadeObjeto(produto, "valor")} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
