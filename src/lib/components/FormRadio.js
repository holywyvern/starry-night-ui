import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

import "./FormRadio.scss";

class FormRadio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };
  static defaultProps = {};
  render() {
    const { style, children, ...props } = this.props;

    return (
      <label className="sn-radio" style={style}>
        <input {...props} type="radio" /> <div>{children}</div>
      </label>
    );
  }
}

export default layoutElement(FormRadio);
