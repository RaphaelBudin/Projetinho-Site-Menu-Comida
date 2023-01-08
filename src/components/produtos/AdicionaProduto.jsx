import { useRef } from "react";
import styles from "./AdicionaProduto.module.css";

export default function AdicionaProduto({ addProdutoHandler, idProduto }) {
  const quantidade = useRef();

  function onClickHandler() {
    addProdutoHandler(idProduto, quantidade.current.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.primeiraLinha}>
        <p className={styles.quantia}>Quantia</p>
        <input type="number" className={styles.input} ref={quantidade} />
      </div>
      <button onClick={onClickHandler} className={styles.botao}>
        {" "}
        Add +{" "}
      </button>
    </div>
  );
}
