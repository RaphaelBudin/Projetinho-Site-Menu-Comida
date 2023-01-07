import { TituloLorem, TextoLorem } from "./helper/HelperFunctions";
import Navbar from "./components/navbar/Navbar";
import CardCinza from "./components/UI/CardCinza";
import CardBranco from "./components/UI/CardBranco";
import styles from "./App.module.css";
import FotoMesa from "./public/foto-mesa.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.mainContainer}>
        <img src={FotoMesa} className={styles.imagemFundo} alt="" />
        <CardCinza titulo={TituloLorem} descricao={TextoLorem} />
        <CardBranco />
      </div>
    </div>
  );
}

export default App;
