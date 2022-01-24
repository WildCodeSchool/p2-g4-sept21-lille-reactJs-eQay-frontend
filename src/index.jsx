import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'style';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
