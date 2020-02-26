import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {withTheme, Button, ListItem, Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import NumberFormat from 'react-number-format';

import {Colors, Typography} from '~/styles';

const CartScreen = ({navigation, theme}) => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const transformedItems = [];
  const items = useSelector(state => {
    // eslint-disable-next-line no-unused-vars
    for (const key in state.cart.items) {
      transformedItems.push({
        id: key,
        name: state.cart.items[key].name,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
      });
    }

    return transformedItems.sort((a, b) => {
      a.id > b.id ? 1 : -1;
    });
  });
  console.log(items);

  // set navigation styles in the header
  navigation.setOptions({
    title: 'Cart',
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? theme.colors.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : theme.colors.primary,
  });

  return (
    <View>
      {transformedItems.map((item, index) => (
        <ListItem
          key={item.id}
          title={item.name}
          bottomDivider
          rightSubtitle={
            <NumberFormat
              value={item.price}
              displayType="text"
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.price}>{value}</Text>}
            />
          }
          leftElement={<Text style={styles.quantityText}>{item.quantity}</Text>}
          rightElement={
            <Button
              type="clear"
              icon={
                <Icon
                  type="ionicon"
                  name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                  size={32}
                  color={Colors.ERROR}
                />
              }
            />
          }
        />
      ))}
      <View style={styles.totalAmountContainer}>
        <Text style={styles.textContainer}>Total Amount:</Text>
        <NumberFormat
          value={totalAmount}
          displayType="text"
          thousandSeparator={true}
          prefix={'$'}
          renderText={value => <Text style={styles.totalAmount}>{value}</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 18,
  },
  price: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 14,
    alignItems: 'center',
  },
  totalAmountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  textContainer: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 24,
    paddingLeft: 20,
  },
  totalAmount: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 24,
    paddingRight: 20,
  },
});

export default withTheme(CartScreen);
