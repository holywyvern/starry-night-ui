import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormInput.scss";

class FormTextInput extends Component {
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
    type: PropTypes.oneOf(["text", "email", "url", "tel"]),
    pattern: PropTypes.string
  };
  static defaultProps = {
    type: "text"
  };
  render() {
    const { style, ...props } = this.props;
    return <input {...props} className="sn-form-input" style={style} />;
  }
}

export default layoutElement(FormTextInput);
