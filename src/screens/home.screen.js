import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {withTheme, Card, Button, Icon} from 'react-native-elements';
import Toast from 'react-native-root-toast';
import NumberFormat from 'react-number-format';

import {Typography, Colors} from '~/styles';
import Morph from '~/components/morph';
import * as productActions from '~/store/actions/product.actions';
import * as cartActions from '~/store/actions/cart.actions';

const HomeScreen = ({theme, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  const loadProducts = useCallback(async () => {
    try {
      await dispatch(productActions.fetchProducts());
    } catch (error) {
      Toast.show(error, {
        backgroundColor: Colors.ERROR,
        textColor: Colors.WHITE,
      });
    }
  }, [dispatch]);

  // useEffect(() => {
  //   const willFocusSub = navigation.addListener('willFocus', loadProducts);
  //   return () => {
  //     if (willFocusSub) {
  //       willFocusSub.remove();
  //     }
  //   };
  // }, [loadProducts, navigation]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [loadProducts]);

  // set navigation styles in the header
  navigation.setOptions({
    title: 'Home',
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
    headerRight: () => (
      <Button
        style={styles.headerButtonRight}
        type="clear"
        onPress={() => {
          navigation.navigate('Cart');
        }}
        icon={
          <Icon
            type="ionicon"
            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            size={32}
            color={Platform.OS === 'android' ? 'white' : Colors.PRIMARY}
          />
        }
      />
    ),
  });

  if (isLoading) {
    return (
      <View style={styles.centerScreen}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      {products.map((item, index) => (
        <Card
          title={item.name}
          image={{uri: item.imageUrl}}
          key={item.id}
          containerStyle={styles.cardContainer}
          titleStyle={styles.titleText}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.description}</Text>
          </View>
          <View style={styles.cardButtonContainer}>
            <Button
              type="clear"
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
                  color={Colors.SECONDARY}
                />
              }
            />
            <Morph mainColor={'#fff'} style={styles.priceMorphContainer}>
              <NumberFormat
                value={item.price}
                displayType="text"
                thousandSeparator={true}
                prefix={'$'}
                renderText={value => <Text style={styles.price}>{value}</Text>}
              />
            </Morph>
            <Button
              type="clear"
              icon={
                <Icon
                  type="ionicon"
                  onPress={() => {
                    navigation.navigate('Detail', {id: item.id});
                  }}
                  name={Platform.OS === 'android' ? 'md-eye' : 'ios-eye'}
                  size={32}
                  color={Colors.SECONDARY}
                />
              }
            />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 5,
  },
  listContainer: {
    width: '100%',
    padding: 20,
  },
  titleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 23,
    alignItems: 'center',
  },
  priceMorphContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  headerButtonRight: {marginRight: 10},
  headerButtonLeft: {marginLeft: 10},
});

export default withTheme(HomeScreen); // helps to get the theme in the props
