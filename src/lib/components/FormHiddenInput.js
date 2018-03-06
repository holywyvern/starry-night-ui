import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormInput.scss";

class FormHiddenInput extends Component {
  static propTypes = {
    /**
     * The current input value
     */
    value: PropTypes.string,
    /**
     * Value on change
     */
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    pattern: PropTypes.string
  };
  static defaultProps = {};
  render() {
    const { style, ...props } = this.props;
    return <input {...props} type="hidden" style={style} />;
  }
}

export default layoutElement(FormHiddenInput);
