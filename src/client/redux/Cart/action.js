import axios from 'axios';

export const UPDATE_CART = 'UPDATE_CART';
export const SET_ERROR = 'SET_ERROR';

export const addProduct = product => {
  return dispatch => {
    axios
      .post('/cart/addProduct', {
        product
      })
      .then(res => {
        if (res.data.err) {
          dispatch(setError(res.data.err.message));
        } else {
          dispatch(updateCart(res.data.cart, res.data.totalPrice));
        }
      })
      .catch(err => {
        dispatch(setError(err.response.data.err.message));
      });
  };
};

export const removeProduct = product => {
  return dispatch => {
    axios
      .post('/cart/removeProduct', {
        product
      })
      .then(res => {
        if (res.data.err) {
          dispatch(setError(res.data.err.message));
        } else {
          dispatch(updateCart(res.data.cart, res.data.totalPrice));
        }
      })
      .catch(err => {
        dispatch(setError(err.response.data.err.message));
      });
  };
};

export const updateCart = (cart, totalPrice) => ({
  type: UPDATE_CART,
  cart,
  totalPrice
});

export const setError = error => ({
  type: SET_ERROR,
  error
});