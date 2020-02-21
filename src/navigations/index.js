import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {AuthNavigatorStack} from '~/navigations/auth.navigator';
import {HomeNavigatorStack} from '~/navigations/home.navigator';
// import {FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD} from '~/styles/typography';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigatorStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
