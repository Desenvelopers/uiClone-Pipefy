import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #eff1f8;
    color: #333;
    -webkit-font-smoothing: antialiased;

  }

  ul {
    list-style: none;
    
  }
`