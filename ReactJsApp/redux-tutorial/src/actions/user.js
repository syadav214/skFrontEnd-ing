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

export function showSuccess() {
  return {
    type: SHOW_ERR,
    payload: {
      user: 'Success'
    }
  };
}

export function apiRequest() {
  return dispatch => {
    fetch('https://google2.com')
      .then(() => {
        console.log('Success');
        dispatch(showSuccess());
      })
      .catch(() => {
        console.log('error');
        dispatch(showError());
      });
  };
}
