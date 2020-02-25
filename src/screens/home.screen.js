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
import {withTheme, Card} from 'react-native-elements';
import Toast from 'react-native-root-toast';

import * as productActions from '~/store/actions/product.actions';
import {Typography, Colors} from '~/styles';

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
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? theme.colors.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : theme.colors.primary,
    title: 'Home',
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
          titleStyle={styles.titleText}>
          <Text style={styles.text}>{item.description}</Text>
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
  listContainer: {
    width: '100%',
    padding: 20,
  },
  titleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  text: {
    marginBottom: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default withTheme(HomeScreen); // helps to get the theme in the props
