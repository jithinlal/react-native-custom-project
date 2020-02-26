import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from '~/screens/order.screen';

const Stack = createStackNavigator();

export const OrderNavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
};
