import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormInput.scss";

class FormPasswordInput extends Component {
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
    defaultValue: PropTypes.string
  };
  static defaultProps = {};
  render() {
    const { style, ...props } = this.props;
    return (
      <input
        {...props}
        type="password"
        className="sn-form-input"
        style={style}
      />
    );
  }
}

export default layoutElement(FormPasswordInput);
