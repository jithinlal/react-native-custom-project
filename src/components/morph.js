import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from 'color';

import {Colors} from '~/styles';

const Morph = ({radius, style, revert, borderless, children}) => {
  const topStyles = StyleSheet.flatten([
    styles.morphTop,
    revert && {
      shadowColor: color(Colors.PRIMARY)
        .darken(0.3)
        .alpha(0.5),
    },
    {borderRadius: radius || 10},
    style,
  ]);
  const bottomStyles = StyleSheet.flatten([
    styles.morphBottom,
    revert && {
      shadowColor: color(Colors.PRIMARY)
        .darken(0.5)
        .alpha(0.5),
    },
    {borderRadius: radius || 10},
  ]);
  const morphStyles = StyleSheet.flatten([
    styles.morph,
    borderless && {borderWidth: 0},
    {borderRadius: radius || 10},
  ]);

  return (
    <View style={topStyles}>
      <View style={bottomStyles}>
        <View style={morphStyles}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  morph: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Colors.PRIMARY,
    borderColor: color(Colors.PRIMARY)
      .lighten(0.5)
      .alpha(0.2),
  },
  morphTop: {
    borderRadius: 10,
    // box-shadow is equivalent to shadow style in React Native
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(Colors.PRIMARY)
      .lighten(0.5)
      .alpha(0.5), // this should be lighter shadow
  },
  morphBottom: {
    borderRadius: 10,
    // box-shadow is equivalent to shadow style in React Native
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: color(Colors.PRIMARY)
      .darken(0.3)
      .alpha(0.5), // this should be darker shadow
  },
});

export default Morph;
