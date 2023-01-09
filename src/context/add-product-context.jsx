import { createContext } from "react";

// Realizar gestão do carrinho inteiramente por aqui
// Incluindo as funções de adicionar, remover, limpar, etc
//Fazer funcionar via props primeiro, depois refatorar

const ProductContext= createContext({
    onAdd: (array, id, quantidade)=>{},
    onRemove: (array, id, quantidade)=>{},
});

export function ProductContextProvider(props){
    function onAddHandler(array, id, quantidade){

    }

    function onRemoveHandler(array, id, quantidade){

    }

 return (
    <ProductContext.Provider value={{onAdd: onAddHandler, onRemove: onRemoveHandler }}>
        {props.children}
    </ProductContext.Provider>       
 );
}
