import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {withTheme, Button, Icon} from 'react-native-elements';

import {Colors} from '~/styles';

const OrderScreen = ({navigation, theme}) => {
  // set navigation styles in the header
  navigation.setOptions({
    title: 'Orders',
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? theme.colors.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : theme.colors.primary,
    headerLeft: () => (
      <Button
        style={styles.headerButtonLeft}
        type="clear"
        onPress={() => {
          navigation.openDrawer();
        }}
        icon={
          <Icon
            type="ionicon"
            name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            size={32}
            color={Platform.OS === 'android' ? 'white' : Colors.PRIMARY}
          />
        }
      />
    ),
  });

  return (
    <View>
      <Text>Order screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerButtonLeft: {marginLeft: 10},
});

export default withTheme(OrderScreen);
