import styles from "./Carrinho.module.css";

export default function Botoes({ modalHandler, fecharPedidoHandler }) {
  return (
    <div className={styles.linhaBotoes}>
      <button className={styles.botaoFecharCarrinho} onClick={modalHandler}>
        Fechar
      </button>
      <button className={styles.botaoFazerPedido} onClick={fecharPedidoHandler}>
        Fazer Pedido
      </button>
    </div>
  );
}
