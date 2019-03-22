const phone = (state = {}, action) => {
  switch (action.type) {
    case 'home':
      return { ...state, pl: 'home', number: action.number };
    case 'ofc':
      return { ...state, pl: 'ofc', number: action.number };
    default:
      return state;
  }
};

export default phone;
