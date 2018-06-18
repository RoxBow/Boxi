import { UPDATE_CART, SET_ERROR, OPEN_CART, CLOSE_CART } from './action';

const initialState = {
  products: [],
  totalPrice: 0,
  isOpen: false,
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
    case OPEN_CART:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_CART:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default cartReducer;
