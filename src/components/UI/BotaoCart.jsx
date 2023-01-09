import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./BotaoCart.module.css";

//Dados Mockados
const contador = Math.floor(Math.random()*100);

export default function BotaoCart({modalHandler}){
    return(
        <div className={styles.container} onClick={modalHandler}>
            <div className={styles.icone}> <FontAwesomeIcon icon={faShoppingCart} size="xs"/> </div>
            <div className={styles.texto}> Seu Carrinho</div>
            <div className={styles.contador}> {contador} </div>
        </div>
    );
}