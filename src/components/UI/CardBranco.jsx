import OpcaoMenu from "../produtos/OpcaoMenu";
import styles from "./CardBranco.module.css";

export default function CardBranco({ addProductHandler, itens }) {
  return (
    <div className={styles.container}>
      {itens.map((item) => (
        <OpcaoMenu
          itemCardapio={item}
          key={item.id}
          addProductHandler={addProductHandler}
        />
      ))}
    </div>
  );
}
