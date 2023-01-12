import { useContext } from "react";
import AllProductsContext from "../../context/lista-produtos-context";
import AdicionaProduto from "./AdicionaProduto";
import InformacoesProduto from "./InformacoesProdutos";
import styles from "./OpcaoMenu.module.css";

export default function OpcaoMenu({itemCardapio}){
    const contextoProduto = useContext(AllProductsContext);
    return (
        <div className={styles.container}>
            <InformacoesProduto produto={itemCardapio}/>
            <AdicionaProduto idProduto={itemCardapio.id} addProdutoHandler={contextoProduto.addProductHandler}/>
        </div>
    );
}