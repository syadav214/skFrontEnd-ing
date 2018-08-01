import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './components/landing';
import Services from './components/services';
import Careers from './components/careers';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route exact={true} path="/(|1)" component= {Landing}/>
    <Route path="/2" component={Services}/>
    <Route path="/3" component={Careers}/>
  </div>
  </BrowserRouter>,  
  document.body
);