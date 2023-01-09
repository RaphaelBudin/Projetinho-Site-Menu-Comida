import { useState } from "react";
import BotaoCart from "../UI/BotaoCart";
import styles from "./Navbar.module.css";
import Modal from "../UI/Modal";
import Carrinho from "../cart/Carrinho";

export default function Navbar() {
  const [modalAberto, setModalAberto] = useState(false);

  function modalHandler() {
    setModalAberto(!modalAberto);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.nomeLoja}>BUDIN COMIDAS</div>
      <BotaoCart modalHandler={modalHandler} />
      <Modal aberto={modalAberto}>
        <Carrinho modalHandler={modalHandler} />
      </Modal>
    </div>
  );
}
