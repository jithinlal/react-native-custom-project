import Cart from '~/models/Cart';
import {ADD_ITEM, DELETE_ITEM} from '~/store/actions/cart.actions';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newOrUpdatedCartItme;
      if (state.items[action.id]) {
        newOrUpdatedCartItme = new Cart(
          action.id,
          state.items[action.id].quantity + 1,
          action.name,
          state.items[action.id].price + action.price,
        );
      } else {
        newOrUpdatedCartItme = new Cart(
          action.id,
          1,
          action.name,
          action.price,
        );
      }

      return {
        ...state,
        items: {...state.items, [action.id]: newOrUpdatedCartItme},
        totalAmount: state.totalAmount + action.price,
      };

    case DELETE_ITEM:
      if (!state.items[action.id]) {
        return state;
      }

      const itemTotal = state.items[action.id].price;
      const itemQuantity = parseInt(state.items[action.id].quantity, 10);

      let updatedItems = {...state.items};
      let updatedTotalAmount;
      if (itemQuantity === 1) {
        updatedTotalAmount = state.totalAmount - itemTotal;
        delete updatedItems[action.id];
      } else {
        let singleItemPrice = itemTotal / itemQuantity;
        let updatedCartItem = new Cart(
          action.id,
          itemQuantity - 1,
          action.name,
          itemTotal - singleItemPrice,
        );
        updatedTotalAmount = state.totalAmount - singleItemPrice;

        updatedItems = {...updatedItems, [action.id]: updatedCartItem};
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return state;
  }
};
