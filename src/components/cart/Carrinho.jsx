import { useContext } from "react";
import { AllProductsContext } from "../../context/lista-produtos-context";
import LinhaCarrinho from "./LinhaCarrinho";
import styles from "./Carrinho.module.css";

export default function Carrinho({ modalHandler }) {
  const todosProdutos = useContext(AllProductsContext);

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
              />
            );
          })}
      </div>
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
}
