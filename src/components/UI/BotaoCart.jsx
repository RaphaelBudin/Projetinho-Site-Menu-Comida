import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./BotaoCart.module.css";

export default function BotaoCart(){
    function onClickHandler(){
        alert("Carrinho clicado");
    }
    return(
        <div className={styles.container} onClick={onClickHandler}>
            <div className={styles.icone}> <FontAwesomeIcon icon={faShoppingCart} size="xs"/> </div>
            <div className={styles.texto}> Seu Carrinho</div>
            <div className={styles.contador}> 0 </div>
        </div>
    );
}