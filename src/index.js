import React from 'react';
// import {Platform} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import MainNavigator from '~/navigations';

const theme = {
  colors: {
    primary: '#5d59e3',
    secondary: '#57aade',
    grey0: '#bd48bb',
    grey1: '#bd48bb',
    grey2: '#bd48bb',
    grey3: '#bd48bb',
    grey4: '#bd48bb',
    grey5: '#bd48bb',
    greyOutline: '#bd48bb',
    searchBg: '#bd48bb',
    success: '#62d162',
    error: '#d1332e',
    warning: '#e3b727',
    divider: '#000000',
  },

  Button: {
    raised: true,
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default App;
