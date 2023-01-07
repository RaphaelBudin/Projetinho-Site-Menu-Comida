import styles from "./BotaoCart.module.css";

export default function BotaoCart(){
    return(
        <div className={styles.container}>
            <div> Ícone </div>
            <div className={styles.texto}> Seu Carrinho</div>
            <div className={styles.contador}> 0 </div>
        </div>
    );
}