import React from 'react';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    document.title = 'Employee Login';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { err: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = event.target.uname.value.toLowerCase();
    let displayUsername = '';
    let userId = 0;

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(users => {
        let valid = false;
        for (let i = 0; i < users.length; i++) {
          if (users[i].username.toLowerCase() === username) {
            userId = users[i].id;
            displayUsername = users[i].username;
            valid = true;
            break;
          }
        }

        if (valid) {
          localStorage.setItem('userId', userId);
          localStorage.setItem('displayUsername', displayUsername);
          window.location.href = '/profile';
        } else {
          this.setState({ err: 'Wrong username!!' });
          document.getElementById('login-form').reset();
        }
      });
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} id="login-form">
          <h2 className="text-center">{document.title}</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="uname"
              id="uname"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">Log in</button>
          </div>
          <label id="err" className="err">
            {this.state.err}
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
