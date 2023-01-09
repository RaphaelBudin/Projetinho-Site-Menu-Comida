import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carrinho.module.css";

export default function LinhaCarrinho({
  produto,
  retornaPropriedadeObjeto,
  atualizaQuantidadeHandler,
}) {
  return (
    <>
      <div key={produto.id} className={styles.linha}>
        <div className={styles.informacoes}>
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
          <br />
          <br />
        </div>
        <div className={styles.botoes}>
          <div className={styles.linha}>
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

          <span className={styles.lixeira}>
            <FontAwesomeIcon icon={faTrash} color="darkred" />
          </span>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
