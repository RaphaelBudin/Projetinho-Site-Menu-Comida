import styles from "./Carrinho.module.css";

export default function Total({totalPedido}) {
  return (
    <div className={styles.linhaTotal}>
      <span>Total</span>
      <span className={styles.totalPedido}>
        R$ {totalPedido}
      </span>
    </div>
  );
}
