import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormLabel.scss";

class FormLabel extends Component {
  static propTypes = {
    htmlFor: PropTypes.string
  };
  static defaultProps = {};
  render() {
    const { style, ...props } = this.props;

    return <label {...props} className="sn-form-label" style={style} />;
  }
}

export default layoutElement(FormLabel);
