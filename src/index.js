import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

import GlobalStyle from './styles';
import { light } from './styles/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ light }>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
