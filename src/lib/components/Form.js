import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Form.scss";
import layoutElement from "./layoutElement";

/**
 * A form is an element used to let users complete a set of elements,
 * before you process them.
 * It's filled mostly width inputs and labels.
 */
class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };
  static defaultProps = {};
  render() {
    const { children, onSubmit, style } = this.props;
    return (
      <form onSubmit={onSubmit} style={style} className="sn-select">
        {children}
      </form>
    );
  }
}

export default layoutElement(Form);
