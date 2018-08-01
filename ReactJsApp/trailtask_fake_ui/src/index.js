import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Login from './components/login';
import CreatePosts from './components/create-posts.js';
import Profile from './components/profile';
import Comments from './components/comments';
import NoMatch from './components/nomatch';
import Menu from './components/menu';

//css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/common.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/(|login)" component={Login} />
      <Route path="/posts" component={CreatePosts} />
      <Route path="/profile" component={Profile} />
      <Route path="/comments/:id" component={Comments} />
      <Route path="/logout" component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
