# Projetinho-Site-Menu-Comida
 Projetinho para Treinar conceitos aprendidos em react, assim como arquitetura planejada

## Dependências do Projeto ##
FontAwesome
https://fontawesome.com/v5/docs/web/use-with/react

### Padrão de Importação ###
Os imports devem ser organizados na ordem que segue:

- Componentes do React
- Componentes do ReactDOM
- Componentes do ReactNavigation
- Dependências externas
- Componentes próprios 
- Estilos .css / module.css 
- StyledComponents

### Padrão de Estilos ###
Cada elemento poderá definir, na seguinte ordem, suas propriedades CSS:

- Display, formatação layout e derivados (flex, flex-direcion, justify-content, text-align) 
- Dimensões (width, height)
- Margens   (top,left)
- Padding   (top, left, right, down)
- Formatação caracteres (font-family, font-weight, font-style)
- Cores     (background, color, border-color) 
- Bordas    (width, radius) 

### Árvores de Componentes ###
 Primeiramente identificar quais serão os diferentes componentes do meu projeto, facilitando o processo de desenvolvimento

- Navbar
    - Nome Loja
    - Botão Carrinho
        - Ícone carrinho
        - Texto carrinho
        - Contador Items

- Plano de Fundo
    - Imagem ocupando os primeiros 2/5  da tela
    - Cor de fundo: cinza chumbo

- Card Cinza
    - Tìtulo
    - Descrição

- Card Branco
    - Produto
        - Nome Item
        - Breve descrição
        - Preço
    - Adicionar Produto
        - Texto
        - Quantia
        - Botão adicionar quantia

- PopUp Carrinho Modal
    - Card Branco
    - Produto
        - Nome Item
        - Preço
        - Quantidade (editável)
    - Alterar quantidade
        - Botão de +
        - Botão de -
    - Total
        - Texto
        - Valor
    - Botões Navegação
        - Fechar
        - Finalizar Pedido