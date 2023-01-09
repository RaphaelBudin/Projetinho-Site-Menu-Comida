import { createContext } from "react";

export const AllProductsContext = createContext({
  opcoesMenu: [],
  carrinho: [],
  atualizaQuantidadeHandler: ()=>{},
  excluiProdutoHandler: ()=>{},
});
