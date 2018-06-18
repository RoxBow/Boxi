import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import popin from './Popin/reducer';
import service from './Service/reducer';
import user from './User/reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  user,
  service,
  cart,
  popin,
  form
});
