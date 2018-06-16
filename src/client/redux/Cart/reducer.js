import { UPDATE_CART, SET_ERROR } from './action';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const initialState = {
  products: [],
  totalPrice: 0,
  error: ''
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        products: action.cart,
        totalPrice: action.totalPrice
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default cartReducer;
