import { combineReducers } from 'redux';
import user from './User/reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  user,
  form
});
