import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.state = { buttonText: false };
  }

  handleClick = () =>
    this.setState(() => {
      return { buttonText: !this.state.buttonText };
    });

  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText.toString()}</button>;
  }
}
