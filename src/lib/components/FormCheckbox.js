import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormCheckbox.scss";

class FormCheckbox extends Component {
  static propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };
  static defaultProps = {};
  render() {
    const { style, children, ...props } = this.props;

    return (
      <label className="sn-checkbox" style={style}>
        <input {...props} type="checkbox" /> <div>{children}</div>
      </label>
    );
  }
}

export default layoutElement(FormCheckbox);
