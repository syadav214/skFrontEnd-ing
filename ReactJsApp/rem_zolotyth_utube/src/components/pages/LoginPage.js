import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {
  submit = data => {
    return this.props.login(data).then(data => {
      console.log('data',data);
      return data
      // this.props.history.push('/');
    })
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);