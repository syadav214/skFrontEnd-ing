import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

/* Default behavior of semantic-ui that it does not have margin.
We can get margin if we add class name 'ui container'
*/
const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
