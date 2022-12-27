import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';
import { ModalProvider } from 'styled-react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <GlobalStyle />
      <Router />
    </ModalProvider>
  </ThemeProvider>
);
