import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dekko&display=swap');
  :root {
    --color-primary: #28abb9;
    --color-secondary: #2d6187;
    --color-third: #a8dda8;
    --font-family: 'Dekko';
  }
  
  body {
    width: 100%;
  }
  `;

export default GlobalStyle;
