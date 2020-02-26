import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '~/screens/home.screen';
import CartScreen from '~/screens/cart.screen';

const Stack = createStackNavigator();

export const HomeNavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
