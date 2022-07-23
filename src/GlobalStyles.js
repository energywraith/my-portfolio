import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.black};
    font-family: Rubik;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }

  .rwd-container {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default GlobalStyle;
