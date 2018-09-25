import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';

/* basic reducer
function reducer(state, action) {
  return 'state';
}
*/

function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = [], action) {
  switch (action.type) {
    case 'updateuser':
      return action.payload.user;
      break;
  }
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

/* we can pass single reducers function
OR
combine reducers
And 
can pass initial state as well
*/
const store = createStore(
  allReducers,
  {
    products: 'Iphone',
    user: 'Santos'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('Initial=>', store.getState());

const updateAction = {
  type: 'updateuser',
  payload: {
    user: 'john'
  }
};

store.dispatch(updateAction);

/* basic action example
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};

store.dispatch(action);

console.log('After dispatch=>', store.getState());
*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
