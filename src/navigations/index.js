import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigatorStack} from '~/navigations/auth.navigator';
// import {HomeNavigatorStack} from '~/navigations/home.navigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigatorStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
