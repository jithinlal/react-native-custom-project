import React from 'react';
import {ThemeProvider} from 'react-native-elements';

import MainNavigator from '~/navigations';
import {Colors} from '~/styles';

const theme = {
  colors: {
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,
    grey0: '#bd48bb',
    grey1: '#bd48bb',
    grey2: '#bd48bb',
    grey3: '#bd48bb',
    grey4: '#bd48bb',
    grey5: '#bd48bb',
    greyOutline: '#bd48bb',
    searchBg: '#bd48bb',
    success: Colors.SUCCESS,
    warning: Colors.WARNING,
    error: Colors.ERROR,
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
