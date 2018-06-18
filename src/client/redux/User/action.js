import axios from 'axios';

import { setSelectedProduct } from '../Cart/action';
import { showPopin } from '../Popin/action';

export const SET_MESSAGE_INFO = 'SET_MESSAGE_INFO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
export const SET_ERROR = 'SET_ERROR';

export const requestSignUp = (email, password) => {
  return dispatch => {
    axios
      .post('/user/signup', {
        email,
        password
      })
      .then(res => {
        if (res.data.err) {
          dispatch(setError(res.data.err.message));
        } else {
          dispatch(setMessageInfo(res.data.messageInfo));
        }
      })
      .catch(err => {
        dispatch(setError(err.response.data.err.message));
      });
  };
};

export const requestLogin = e => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  return dispatch => {
    axios
      .post('/user/login', {
        username: email,
        password
      })
      .then(res => {
        if (!res.data.err) {
          dispatch(login());
        }
      })
      .catch(err => {
        dispatch(setError(err.response.data.message));
      });
  };
};

export const setMessageInfo = messageInfo => {
  return {
    type: SET_MESSAGE_INFO,
    messageInfo
  };
};

export const login = e => {
  return {
    type: LOGIN
  };
};

export const setAuthentication = isAuthenticated => {
  return {
    type: SET_AUTHENTICATION,
    isAuthenticated
  };
};

export const logout = () => {
  axios.get('/user/logout').catch(err => {
    console.log(err);
  });

  return {
    type: LOGOUT
  };
};

export const setError = errorMessage => {
  return {
    type: SET_ERROR,
    errorMessage
  };
};

export const buyProduct = (popinType, selectedProduct) => {
  return dispatch => {
    dispatch(setSelectedProduct(selectedProduct));
    dispatch(showPopin(popinType));
  };
};
