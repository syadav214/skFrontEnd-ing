import { combineReducers } from 'redux';
import phone from './phone';
import address from './address';
import dob from './dob';

export default combineReducers({
  phone,
  address,
  dob
});
