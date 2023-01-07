import styles from "./CardCinza.module.css";

// Precisa fazer a opacidade da imagem de fundo não transferir para este elemento

export default function CardCinza({ titulo, descricao }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}> {titulo} </h2>
      <p className={styles.descricao}> {descricao} </p>
    </div>
  );
}
