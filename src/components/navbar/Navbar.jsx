import BotaoCart from "../UI/BotaoCart";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
        <div className={styles.navbar}>
            <div className={styles.nomeLoja}>
                BUDIN COMIDAS
            </div>
            <BotaoCart/>
        </div>
    );
}
