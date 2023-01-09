import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

export default function Modal({ aberto, children }) {
  if (!aberto) return null;

  return (
    <>
    {ReactDOM.createPortal(<div className={styles.backdrop}></div>,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<div className={styles.overlay}>{children}</div>,document.getElementById('overlay'))}
    </>
  );
}
