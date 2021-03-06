import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;