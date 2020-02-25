import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import authReducer from '~/store/reducers/auth.reducer';
import productReducer from '~/store/reducers/product.reducer';

import MainNavigator from '~/navigations';
import {Colors} from '~/styles';

// state management logic
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
