import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from 'color';

const Morph = ({radius, style, revert, borderless, children, mainColor}) => {
  const topStyles = StyleSheet.flatten([
    {
      borderRadius: 10,
      // box-shadow is equivalent to shadow style in React Native
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: color(mainColor)
        .lighten(0.5)
        .alpha(0.5), // this should be lighter shadow
    },
    revert && {
      shadowColor: color(mainColor)
        .darken(0.3)
        .alpha(0.5),
    },
    {borderRadius: radius || 10},
    style,
  ]);
  const bottomStyles = StyleSheet.flatten([
    {
      borderRadius: 10,
      // box-shadow is equivalent to shadow style in React Native
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: color(mainColor)
        .darken(0.3)
        .alpha(0.5), // this should be darker shadow
    },
    revert && {
      shadowColor: color(mainColor)
        .darken(0.5)
        .alpha(0.5),
    },
    {borderRadius: radius || 10},
  ]);
  const morphStyles = StyleSheet.flatten([
    {
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: mainColor,
      borderColor: color(mainColor)
        .lighten(0.5)
        .alpha(0.2),
    },
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

export default Morph;
