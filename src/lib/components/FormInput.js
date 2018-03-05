import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

class FormInput extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { style } = this.props;
    return null;
  }
}

export default layoutElement(FormInput);
