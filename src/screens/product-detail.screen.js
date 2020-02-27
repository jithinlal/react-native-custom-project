import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const item = useSelector(state =>
    state.product.products.filter(product => product.id !== id),
  );

  console.log(item.name);

  return (
    <View style={styles.screen}>
      <Text>{item[0].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductDetailScreen;
