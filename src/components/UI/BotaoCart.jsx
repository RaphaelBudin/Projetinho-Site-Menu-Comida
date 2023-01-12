import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./BotaoCart.module.css";
import { useContext } from "react";
import { AllProductsContext } from "../../context/lista-produtos-context";

export default function BotaoCart({modalHandler}){
    const contextoProdutos = useContext(AllProductsContext);
    return(
        <div className={styles.container} onClick={modalHandler}>
            <div className={styles.icone}> <FontAwesomeIcon icon={faShoppingCart} size="xs"/> </div>
            <div className={styles.texto}> Seu Carrinho</div>
            <div className={styles.contador}> {contextoProdutos.carrinho.length} </div>
        </div>
    );
}