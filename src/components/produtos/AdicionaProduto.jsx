import styles from "./AdicionaProduto.module.css";

export default function AdicionaProduto({ addProdutoHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.primeiraLinha}>
        <p className={styles.quantia}>Quantia</p>
        <input type="number" className={styles.input}/>
      </div>
    <button onClick={addProdutoHandler} className={styles.botao}> Add + </button>
    </div>
  );
}
