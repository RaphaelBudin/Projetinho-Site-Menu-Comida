import styles from "./Carrinho.module.css";

export default function Carrinho({produtosCarrinho, modalHandler}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Itens Carrinho</span>
        <span onClick={modalHandler}>❌</span>
      </div>
      <div className={styles.conteudo}>
        {produtosCarrinho && produtosCarrinho.map(produto => {
            return <div>
                <p> {produto.nome} </p>
                <p> {produto.descricao} </p>
                <p> {produto.preco} </p>
            </div>
        })}
      </div>
    </div>
  );
}
