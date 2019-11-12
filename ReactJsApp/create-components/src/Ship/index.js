import "!style-loader!css-loader!sass-loader!./style.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Ship extends Component {
  render() {
    return <div>Ship</div>;
  }
}

Ship.propTypes = {
  reference: PropTypes.object,
  onChange: PropTypes.func,
  requestedBy: PropTypes.string,
  showButton: PropTypes.bool
};

Ship.defaultProps = {
  showButton: false
};
