import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormInput.scss";

class FormNumberInput extends Component {
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
    required: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.oneOf(["number", "range"])
  };
  static defaultProps = {
    type: "number"
  };
  render() {
    const { style, ...props } = this.props;
    return <input {...props} className="sn-form-input" style={style} />;
  }
}

export default layoutElement(FormNumberInput);
