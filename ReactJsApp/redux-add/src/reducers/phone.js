const phone = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PHONE':
      return { ...state, number: action.number };
    case 'ofc':
      return { ...state, number: action.number };
    default:
      return state;
  }
};

export default phone;
