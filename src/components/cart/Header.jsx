import styles from "./Carrinho.module.css";

export default function HeaderCarrinho({modalHandler}) {
  return (
    <div className={styles.header}>
      <span>Itens Carrinho</span>
      <span onClick={modalHandler}>❌</span>
    </div>
  );
}
