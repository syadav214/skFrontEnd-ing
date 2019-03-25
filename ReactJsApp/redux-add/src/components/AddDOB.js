import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDOB } from '../actions';

class AddDOB extends Component {
  onDOBClick() {
    this.props.addDOB('01-01-1900');
  }

  render() {
    return (
      <div align="center">
        <br />
        <br />
        <button id="dob" onClick={this.onDOBClick.bind(this)}>
          DOB
        </button>
        &nbsp;&nbsp;
        <span>Current DOB: </span> {this.props.dob.date}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dob: state.dob
  };
};

const mapDispatchToProps = {
  addDOB
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDOB);
