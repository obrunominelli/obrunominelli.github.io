import React, { useState } from 'react';
import AppContext from './context';

function AppProvider({ children }) {
  const [appTheme, setAppTheme] = useState(false);

  const object = {
    appTheme,
    setAppTheme
  };

  return (
    <AppContext.Provider value={ object }>
      { children }
    </AppContext.Provider>
  );
};

export default AppProvider;