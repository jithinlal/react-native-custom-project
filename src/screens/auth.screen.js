import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography} from '~/styles';

const AuthScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Auth Screen</Text>
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

export default AuthScreen;
