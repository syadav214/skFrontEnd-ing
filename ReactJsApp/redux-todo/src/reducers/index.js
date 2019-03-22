import { combineReducers } from 'redux';
import phone from './phone';
import address from './address';

export default combineReducers({
  phone,
  address
});
