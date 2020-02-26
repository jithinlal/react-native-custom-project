export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = ({id, name, price}) => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_ITEM,
        id,
        name,
        price,
      });
    } catch (error) {
      throw 'Could not add item to cart at the moment, please try again later';
    }
  };
};

export const deleteItem = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_ITEM,
        id,
      });
    } catch (error) {
      throw 'Could not delete the item at the moment, please try again later';
    }
  };
};
