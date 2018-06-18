import { UPDATE_CART, SET_ERROR, OPEN_CART, CLOSE_CART, SET_SELECTED_PRODUCT } from './action';

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
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.selectedProduct
      };
    default:
      return state;
  }
};

export default cartReducer;
