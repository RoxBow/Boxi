import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import service from './Service/reducer';
import user from './User/reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  user,
  service,
  cart,
  form
});
