import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AppContext from './store/context';
import AppRoutes from './store/routes';
import GlobalStyle from './styles';
import { darkTheme, lightTheme } from './styles/themes';

function App() {
  const { appTheme } = useContext(AppContext);
  return (
    <ThemeProvider theme={ appTheme ? darkTheme : lightTheme }>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
