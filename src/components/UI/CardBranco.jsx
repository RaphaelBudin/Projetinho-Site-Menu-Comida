import styles from "./CardBranco.module.css";

export default function CardBranco({ children }) {
  return <div className={styles.container}>{children}</div>;
}
