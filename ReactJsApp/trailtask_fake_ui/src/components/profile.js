import React from 'react';
import Menu from './menu';
import { RingLoader } from 'react-spinners';

class Profile extends React.Component {
  constructor() {
    super();
    this.loading = true;
    let userId = localStorage.getItem('userId');

    if (userId === undefined || userId === null || userId === '0') {
      window.location.href = '/login';
    }

    this.userId = userId;
    this.state = { users: [] };
    this.Users();

    document.title = localStorage.getItem('displayUsername') + ' - Profile';
  }

  Users() {
    fetch('http://jsonplaceholder.typicode.com/users/' + this.userId)
      .then(response => response.json())
      .then(data => {
        this.loading = false;
        this.setState({ users: data, company: data.company.name });
      });
  }

  render() {
    let html;
    if (this.loading) {
      html = (
        <div align="center" className="sweet-loading">
          <RingLoader color={'#123abc'} loading={this.loading} />
        </div>
      );
    } else {
      html = (
        <div align="center">
          <Menu />
          <table className="table table-hover myProfile">
            <thead>
              <tr>
                <th>Profile</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.users.name}</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>{this.state.users.email}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{this.state.company}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{this.state.users.phone}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{this.state.users.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return <div>{html}</div>;
  }
}

export default Profile;
