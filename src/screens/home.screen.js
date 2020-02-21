import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text, Button, withTheme} from 'react-native-elements';

import {Typography} from '~/styles';

const HomeScreen = props => {
  const {theme} = props; // coming from react native elements

  // set navigation styles in the header
  props.navigation.setOptions({
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? theme.colors.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : theme.colors.primary,
    title: 'Home',
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="okay" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

export default withTheme(HomeScreen); // helps to get the theme in the props
