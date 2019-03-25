const dob = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DOB':
      return { ...state, date: action.date };
    default:
      return state;
  }
};

export default dob;
