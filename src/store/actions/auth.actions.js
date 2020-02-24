export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const signup = ({name, email, password, confitmPassword}) => {
  return async dispatch => {
    dispatch({
      type: SIGNUP,
      name,
      email,
      password,
      confitmPassword,
    });
  };
};

export const login = ({email, password}) => {
  return async dispatch => {
    dispatch({
      type: LOGIN,
      email,
      password,
    });
  };
};
