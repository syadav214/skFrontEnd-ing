const address = (state = {}, action) => {
    switch (action.type) {
      case 'home':
        return { ...state, pl: 'home', number: action.address };
      case 'ofc':
        return { ...state, pl: 'ofc', number: action.address };
      default:
        return state;
    }
  };
  
  export default address;
  