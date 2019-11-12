import "!style-loader!css-loader!sass-loader!./style.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Cost extends Component {
  render() {
    return <div>Cost</div>;
  }
}

Cost.propTypes = {
  reference: PropTypes.object,
  onChange: PropTypes.func,
  requestedBy: PropTypes.string,
  showButton: PropTypes.bool
};

Cost.defaultProps = {
  showButton: false
};
