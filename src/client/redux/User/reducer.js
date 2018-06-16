import { SET_MESSAGE_INFO, LOGIN, SET_AUTHENTICATION, LOGOUT, SET_ERROR } from './action';

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE_INFO:
      return {
        ...state,
        messageInfo: action.messageInfo
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        isLoading: false
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.errorMessage
      };
    default:
      return state;
  }
};

export default userReducer;
