import * as React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';

import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp1';
import Comp3 from './Components/Comp1';

const valid: boolean = true;

class App extends React.Component {
  public render() {
    let html: any;
    if (valid) {
      html = (
        <HashRouter>
          <div>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/download">download</NavLink>
              </li>
              <li>
                <NavLink to="/view">view</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact={true} path="/" component={Comp1} />
              <Route exact={true} path="/download" component={Comp2} />
              <Route exact={true} path="/view" component={Comp3} />
            </div>
          </div>
        </HashRouter>
      );
    } else {
      html = <div>{'AccessDenied'}</div>;
    }

    return html;
  }
}
