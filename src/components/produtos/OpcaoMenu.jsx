import AdicionaProduto from "./AdicionaProduto";
import InformacoesProduto from "./InformacoesProdutos";
import styles from "./OpcaoMenu.module.css";

export default function OpcaoMenu({addProductHandler, itemCardapio}){
    return (
        <div className={styles.container}>
            <InformacoesProduto produto={itemCardapio}/>
            <AdicionaProduto addProdutoHandler={addProductHandler}/>
        </div>
    );
}