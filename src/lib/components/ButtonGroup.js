import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./ButtonGroup.scss";
import layoutElement from "./layoutElement";

/**
 * A form is an element used to let users complete a set of elements,
 * before you process them.
 * It's filled mostly width inputs and labels.
 */
class ButtonGroup extends Component {
  static propTypes = {
    /* If true, the button group will be made vertically instead of horizontally */
    vertical: PropTypes.bool
  };
  static defaultProps = {
    vertical: false
  };
  render() {
    const { children, vertical, style } = this.props;
    const classes = classNames("sn-button-group", { vertical });
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default layoutElement(ButtonGroup);
