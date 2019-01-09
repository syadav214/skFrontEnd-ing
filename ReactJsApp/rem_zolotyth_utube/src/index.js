import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

/* For a normal form submit, we should use default state object. 
And for storage across application, we should use redux */

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // to connect react and redux
import thunk from 'redux-thunk'; // return a function instead of action; The inner function receives the store methods dispatch and getState as parameters.
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer'; // reducer takes state and give new state

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
