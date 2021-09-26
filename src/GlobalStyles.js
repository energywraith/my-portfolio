import { createGlobalStyle } from "styled-components";

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

  .rwd-container {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default GlobalStyle;
