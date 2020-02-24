import {LOGIN, SIGNUP} from '~/store/actions/auth.actions';

const initialState = {
  token: null,
  uid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return state;

    case SIGNUP:
      console.log(action);
      return state;

    default:
      return state;
  }
};
