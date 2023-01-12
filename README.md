# Projetinho-Site-Menu-Comida
 Projetinho para Treinar conceitos aprendidos em react, assim como arquitetura planejada

## Dependências do Projeto ##
FontAwesome
https://fontawesome.com/v5/docs/web/use-with/react

## Padrão de Commits ##
O padrão utilizado neste projeto é baseado no **Conventional Commits**, porém com algumas modificações:

- Usando '/' ao invés de ':', pois aumenta a legibilidade. Exemplo: 'feat/Novo Recurso' ao invés de 'feat: Novo Recurso'
- Usando 'style' para informar alterações na estilização e layout do código, ao invés do 'feat'
- Não informarei alterações em linter, trailing spaces e etc.
- Usarei 'readme' ao invés do 'docs' para informar alterações específicas do Readme

## Padrão de Importação ##
Os imports devem ser organizados na ordem que segue:

- Componentes do React
- Componentes do ReactDOM
- Componentes do ReactNavigation
- Dependências externas
- Componentes próprios 
- Estilos .css / module.css 
- StyledComponents
- Arquivos da pasta 'public' (fotos, ícones, etc)

## Padrão de Estilos ##
Cada elemento poderá definir, na seguinte ordem, suas propriedades CSS:

- Display, formatação layout e derivados (z-Index, flex, flex-direcion, justify-content, text-align) 
- Dimensões (width, height)
- Margens   (top,left)
- Padding   (top, left, right, down)
- Formatação caracteres (font-family, font-size, font-weight, font-style)
- Cores     (background, color, border-color) 
- Bordas    (width, radius) 