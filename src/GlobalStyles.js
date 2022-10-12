import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.black};
    font-family: Rubik;
    position: relative;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`;

export default GlobalStyle;
