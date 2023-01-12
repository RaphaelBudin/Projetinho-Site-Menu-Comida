import { useContext, useEffect } from "react";
import { TituloLorem, TextoLorem } from "./helper/HelperFunctions";
import Navbar from "./components/navbar/Navbar";
import CardCinza from "./components/UI/CardCinza";
import CardBranco from "./components/UI/CardBranco";
import OpcaoMenu from "./components/produtos/OpcaoMenu";
import styles from "./App.module.css";
import FotoMesa from "./public/foto-mesa.jpg";
import {
  AllProductsContext,
  AllProductsContextProvider,
} from "./context/lista-produtos-context";

function App() {
  const contextoProdutos = useContext(AllProductsContext);

  useEffect(() => {
    console.log("Contexto Produtos: ", contextoProdutos);
  }, [contextoProdutos]);

  return (
    <AllProductsContextProvider>
      <Navbar />
      <div className={styles.mainContainer}>
        <img src={FotoMesa} className={styles.imagemFundo} alt="" />
        <CardCinza titulo={TituloLorem} descricao={TextoLorem} />
        <CardBranco>
          {contextoProdutos.opcoesMenu.map((item) => {
            return <OpcaoMenu
              itemCardapio={item}
              key={item.id}
            />;
          })}
        </CardBranco>
      </div>
    </AllProductsContextProvider>
  );
}

export default App;
