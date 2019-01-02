import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp1';
import Comp3 from './Components/Comp1';
const valid: boolean = true;

class App extends React.Component {
  public render() {
    let html: any;
    if (valid) {
      html = (
        <div>
          <BrowserRouter>
            <Navbar>
              <Nav>
                <NavItem eventKey={1} href={`/`}>
                  Créer
                </NavItem>
                <NavItem eventKey={2} href={`/download`}>
                  Télécharger
                </NavItem>
                <NavItem eventKey={3} href={`/view`}>
                  Voir les fiches
                </NavItem>
              </Nav>
            </Navbar>
          </BrowserRouter>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Comp1} />
              <Route exact={true} path="/download" component={Comp2} />
              <Route exact={true} path="/view" component={Comp3} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      html = <div>{'AccessDenied'}</div>;
    }

    return html;
  }
}
