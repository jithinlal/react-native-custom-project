import {LOGIN, SIGNUP} from '~/store/actions/auth.actions';

const initialState = {
  token: null,
  uid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        uid: action.userId,
      };

    case SIGNUP:
      return {
        ...state,
        token: action.token,
        uid: action.userId,
      };

    default:
      return state;
  }
};
