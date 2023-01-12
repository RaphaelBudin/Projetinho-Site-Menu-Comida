import styles from "./Carrinho.module.css";

export default function LinhaTotal({totalPedido}) {
  return (
    <div className={styles.total}>
      <span>Total</span>
      <span className={styles.totalPedido}>
        R$ {totalPedido}
      </span>
    </div>
  );
}
