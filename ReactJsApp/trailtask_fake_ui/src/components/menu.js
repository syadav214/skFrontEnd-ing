import React from 'react';

class Menu extends React.Component {
  constructor() {
    super();
    this.greeting_username = localStorage.getItem('displayUsername');
  }

  logout() {
    localStorage.setItem('userId', 0);
    window.location.href = '/login';
  }

  render() {
    return (
      <div className="myMenu" align="left">
        <ul className="nav navbar-nav navbar-custom">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown">
              Hi {this.greeting_username}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/posts">Posts</a>
              </li>
              <li className="divider" />
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li className="divider" />
              <li>
                <a href="/login" onClick={() => this.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
