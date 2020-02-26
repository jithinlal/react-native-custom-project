import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeNavigatorStack} from '~/navigations/home.navigator';
import {OrderNavigatorStack} from '~/navigations/order.navigator';

const Drawer = createDrawerNavigator();

export const AppNavigatorDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigatorStack} />
      <Drawer.Screen name="Order" component={OrderNavigatorStack} />
    </Drawer.Navigator>
  );
};
