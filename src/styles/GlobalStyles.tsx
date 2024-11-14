import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
