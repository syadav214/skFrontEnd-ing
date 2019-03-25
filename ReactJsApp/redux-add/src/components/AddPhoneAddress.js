import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhone, addAddress } from '../actions';
import AddDOB from './AddDOB';

class AddPhoneAddress extends Component {
  onPhoneClick() {
    this.props.addPhone(12345);
  }

  onAddressClick() {
    this.props.addAddress('India');
  }

  render() {
    return (
      <div align="center">
        <br />
        Say hello to redux
        <br />
        <br />
        <button id="phone" onClick={this.onPhoneClick.bind(this)}>
          Phone
        </button>
        &nbsp;&nbsp;
        <span>Current Phone: </span> {this.props.phone.number}
        <br />
        <br />
        <button id="address" onClick={this.onAddressClick.bind(this)}>
          Address
        </button>
        &nbsp;&nbsp;
        <span>Current address: </span> {this.props.address.text}
        <AddDOB />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: state.phone,
    address: state.address
  };
};

const mapDispatchToProps = {
  addPhone,
  addAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhoneAddress);
