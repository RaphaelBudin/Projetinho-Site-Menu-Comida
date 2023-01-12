import Produto from "./Produto";
import styles from "./Carrinho.module.css";

export default function Conteudo({contextoProdutos,retornaPropriedadeObjeto,}) {
  return (
    <div className={styles.conteudo}>
      {contextoProdutos.carrinho.map((produto) => {
        return (
          <Produto
            key={produto.id}
            className={styles.linha}
            produto={produto}
            retornaPropriedadeObjeto={retornaPropriedadeObjeto}
            atualizaQuantidadeHandler={contextoProdutos.atualizaQuantidadeHandler}
            excluiProdutoHandler={contextoProdutos.excluiProdutoHandler}
          />
        );
      })}
    </div>
  );
}
