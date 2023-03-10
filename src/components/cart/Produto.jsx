import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carrinho.module.css";

export default function Produto({
  produto,
  retornaPropriedadeObjeto,
  atualizaQuantidadeHandler,
  excluiProdutoHandler,
}) {
  return (
      <div key={produto.id} className={styles.linha}>
        <div>
          <span className={styles.nome}>
            {retornaPropriedadeObjeto(produto, "nome")}
          </span>
          <br />
          <span className={styles.descricao}>
            {retornaPropriedadeObjeto(produto, "descricao")}
          </span>
          <br />
          <span className={styles.valor}>
            {retornaPropriedadeObjeto(produto, "valor")}
          </span>
        </div>
        <div className={styles.botoes}>
          <div>
            <span className={styles.label}> Quantidade </span>
            <input
              type="number"
              step="1"
              min="1"
              defaultValue={produto.quantidade}
              className={styles.input}
              onChange={(evento) =>
                atualizaQuantidadeHandler(produto.id, evento.target.value)
              }
            />
          </div>

          <div className={styles.subTotal}>
            R$
            {(
              produto.quantidade * retornaPropriedadeObjeto(produto, "valor")
            ).toFixed(2)}
          </div>

          <span className={styles.lixeira} onClick={()=>excluiProdutoHandler(produto.id)}>
            <FontAwesomeIcon icon={faTrash} color="darkred" />
          </span>
        </div>
      </div>
  );
}
