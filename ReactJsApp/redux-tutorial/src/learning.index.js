import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

/* reducer
Type 1:
function reducer(state, action) {
    if(action.type==='changeState') {
        return action.payload.newState;
    }
  return 'state';
}

Type 2:
function userReducer(state = [], action) {
  switch (action.type) {
    case 'updateuser':
      return action.payload.user;
      break;
  }
  return state;
}
*/

function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = [], { type, payload }) {
  switch (type) {
    case 'updateuser':
      return payload.user;
    default:
      return state;
  }
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

/* action
Type 1:
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};
store.dispatch(action);

Type 2:
const updateAction = {
  type: 'updateuser',
  payload: {
    user: 'john'
  }
};

store.dispatch(updateAction);

console.log('After dispatch=>', store.getState());
*/

// Using Provider, an App can access the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
