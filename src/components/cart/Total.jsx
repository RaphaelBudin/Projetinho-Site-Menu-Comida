import styles from "./Carrinho.module.css";

export default function Total({ totalPedido }) {
  if (!totalPedido) return (<p className={styles.naoHaItens}> Não há itens no carrinho ainda </p>);

  return (
    <div className={styles.linhaTotal}>
      <span>Total</span>
      <span className={styles.totalPedido}>R$ {totalPedido}</span>
    </div>
  );
}
