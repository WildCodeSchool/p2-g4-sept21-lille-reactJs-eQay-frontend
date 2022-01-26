import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color-head-title: white;
    --color-paragraph-title: black;
    --color-paragraph-content: black;
    --color-primary: #28abb9;
    --color-secondary: #2d6187;
    --color-third: #a8dda8;
    --font-family-first: 'Katibeh', cursive;
    --font-family-second: 'Nunito', sans-serif;
  }
  body {
    width: 100%;
  }
  `;
export default GlobalStyle;
