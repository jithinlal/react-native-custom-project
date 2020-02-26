import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigatorStack} from '~/navigations/auth.navigator';
// import {HomeNavigatorStack} from '~/navigations/home.navigator';
import {AppNavigatorDrawer} from '~/navigations/drawer.navigator';

const MainNavigator = () => {
  const isAuth = useSelector(state => !!state.auth.token);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthNavigatorStack /> : <AppNavigatorDrawer />}
    </NavigationContainer>
  );
};

export default MainNavigator;
