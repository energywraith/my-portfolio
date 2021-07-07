import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Rubik;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

export default GlobalStyle;