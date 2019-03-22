import React, { Component } from 'react';
import {
  addHomePhone,
  addOfcPhone,
  addHomeAddress,
  addOfcAddress
} from './actions';

class App extends Component {
  onPhoneClick() {
    //dispatch(addHomePhone(12345));
  }

  onAddressClick() {
    //dispatch(addHomeAddress('India'));
  }

  render() {
    return (
      <div align='center'>
      <br />
        Say hello to redux
        <br />
        <br />
        <button id="phone" onClick={this.onPhoneClick}>
          Phone
        </button>
        <br />
        <br />
        <button id="address" onClick={this.onPhoneClick}>
          Address
        </button>
      </div>
    );
  }
}

export default App;
