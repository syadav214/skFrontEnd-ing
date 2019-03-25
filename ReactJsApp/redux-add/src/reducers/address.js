const address = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return { ...state, text: action.text };
    case 'ofc':
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default address;
