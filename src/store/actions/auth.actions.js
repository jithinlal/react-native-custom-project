import {AUTH_KEY} from '~/utils/config';
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const signup = ({name, email, password, confirmPassword}) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      dispatch({
        type: SIGNUP,
        userId: response.data.localId,
        token: response.data.idToken,
      });
    } catch (error) {
      // console.error(error.response.data);

      const errorType = error.response.data.error.message;
      let message;
      switch (errorType) {
        case 'EMAIL_EXISTS':
          message = 'This email is already taken';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          message = 'Too many attempts to register please try again later';
          break;
        default:
          message = 'Cannot register at the moment please try again later';
          break;
      }

      throw message;
    }
  };
};

export const login = ({email, password}) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      dispatch({
        type: LOGIN,
        userId: response.data.localId,
        token: response.data.idToken,
      });
    } catch (error) {
      const errorType = error.response.data.error.message;
      let message;
      switch (errorType) {
        case 'EMAIL_NOT_FOUND':
          message = 'Email is not registered with us';
          break;
        case 'INVALID_PASSWORD':
          message = 'Email or Password is wrong';
          break;
        default:
          message = 'Cannot login at the moment please try again later';
          break;
      }

      throw message;
    }
  };
};
