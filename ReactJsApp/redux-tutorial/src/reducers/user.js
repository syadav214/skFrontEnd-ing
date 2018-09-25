import { UPDATE_USER, SHOW_ERR } from '../actions/user';

export default function userReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case SHOW_ERR:
      return payload.user;
    default:
      return state;
  }
}
