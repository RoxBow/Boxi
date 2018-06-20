import axios from 'axios';

export const UPDATE_CART = 'UPDATE_CART';
export const SET_ERROR = 'SET_ERROR';
export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

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

export const openCart = () => ({
  type: OPEN_CART
});

export const closeCart = () => ({
  type: CLOSE_CART
});

export const updateCart = (cart, totalPrice) => ({
  type: UPDATE_CART,
  cart,
  totalPrice
});

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const setSelectedProduct = selectedProduct => ({
  type: SET_SELECTED_PRODUCT,
  selectedProduct
});

export const payService = () => {

  return dispatch => {
    axios
      .post('/cart/paymentService')
      .then(res => {
        if (res.data.err) {
          dispatch(setError(res.data.error));
        } else {
          dispatch(updateCart([], 0));
        }
      })
      .catch(err => {
        dispatch(setError(err.response.data.err.message));
      });
  };
}
