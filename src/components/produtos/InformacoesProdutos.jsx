import styles from "./InformacoesProduto.module.css";

export default function InformacoesProduto({ produto }) {
  return (
    <div className={styles.container}>
      <span className={styles.nome}> {produto.nome}</span>
      <span className={styles.descricao}> {produto.descricao}</span>
      <span className={styles.valor}> R$ {produto.valor}</span>
    </div>
  );
}
