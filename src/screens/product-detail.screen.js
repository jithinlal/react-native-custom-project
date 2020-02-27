import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Card, Button, Text, Icon} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import {Colors} from '~/styles';
import * as cartActions from '~/store/actions/cart.actions';

const ProductDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const item = useSelector(state =>
    state.product.products.find(product => product.id === id),
  );

  return (
    <View style={styles.screen}>
      <Card title={item.name} image={{uri: item.imageUrl}}>
        <Text style={styles.textStyle}>{item.description}</Text>
        <Button
          onPress={() => {
            dispatch(
              cartActions.addItem({
                id: item.id,
                name: item.name,
                price: +item.price,
              }),
            );
          }}
          icon={
            <Icon
              type="ionicon"
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={32}
              color={Platform.OS === 'android' ? 'white' : Colors.PRIMARY}
            />
          }
          type="clear"
          buttonStyle={styles.buttonStyle}
          iconContainerStyle={styles.iconContainerStyle}
          title=" Add to Cart"
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  iconContainerStyle: {
    marginRight: 10,
    padding: 20,
  },
  textStyle: {
    marginBottom: 10,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export default ProductDetailScreen;
