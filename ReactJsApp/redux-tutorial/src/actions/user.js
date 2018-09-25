export const UPDATE_USER = 'user.updateUser';
export const SHOW_ERR = 'user.showError';
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERR,
    payload: {
      user: 'Errror'
    }
  };
}

export function apiRequest() {
  return dispatch => {
    fetch('https://google.com')
      .then(() => console.log('Success'))
      .catch(() => dispatch(showError()));
  };
}
