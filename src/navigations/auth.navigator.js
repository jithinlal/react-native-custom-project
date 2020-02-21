import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '~/screens/auth.screen';

const Stack = createStackNavigator();

export const AuthNavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};
