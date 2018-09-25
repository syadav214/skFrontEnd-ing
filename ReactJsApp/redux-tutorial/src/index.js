import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './reducers/products';
import userReducer from './reducers/user';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEnhance = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  allStoreEnhance
);

console.log('Initial=>', store.getState());

const updateAction = {
  type: 'updateuser',
  payload: {
    user: 'john'
  }
};

store.dispatch(updateAction);

// Using Provider, an App can access the store
ReactDOM.render(
  <Provider store={store}>
    <App aProp="WhatEver" />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
