import axios from 'axios';
import Product from '~/models/Product';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://custom-react-native-project.firebaseio.com/products.json',
      );

      const resData = response.data;
      const products = [];
      // eslint-disable-next-line no-unused-vars
      for (const key in resData) {
        products.push(
          new Product(
            key,
            resData[key].name,
            resData[key].imageUrl,
            resData[key].price,
            resData[key].description,
          ),
        );
      }
      dispatch({
        type: FETCH_PRODUCTS,
        products,
      });
    } catch (error) {
      const status = error.response.status;

      let message;
      switch (status) {
        case 404:
          message = '404 not found';
          break;
        case 401:
          message = 'You are not authorized to perform this action';
          break;
        default:
          message =
            'Cannot fetch products at the moment please try again later';
          break;
      }

      throw message;
    }
  };
};
