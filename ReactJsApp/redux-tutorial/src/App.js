import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onApiReq = this.onApiReq.bind(this);
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }
  onApiReq() {
    this.props.onApiReq();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        <br />
        The user: {this.props.user}
        <br />
        <div onClick={this.onApiReq}>Click me </div>
      </div>
    );
  }
}

//connect maps store with components

//mapping State To Props
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user
  };
};

//mapping actions To Props
/*const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    { onUpdateUser: updateUser, onApiReq: apiRequest },
    dispatch
  );
};*/
const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiReq: apiRequest
};

const mergeprops = (propsFromState, propsFromDispatch, ownProps) => {
  console.log('1', propsFromState, '1', propsFromDispatch, '1', ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
