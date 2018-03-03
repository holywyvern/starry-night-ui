import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { addFlexPrefixIfNedded } from "../utils";

import "./ButtonGroup.scss";

/**
 * A form is an element used to let users complete a set of elements,
 * before you process them.
 * It's filled mostly width inputs and labels.
 */
class ButtonGroup extends Component {
  static propTypes = {
    /**
     * Indicates if the current item must expand.
     * If grow is a number, it means wich ratio it is expanded.
     * (only works when this layout is inside a linear layout)
     */
    grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    /**
     * Indicates if the current item must shrink.
     * Tf shrink is a number, it means wich ratio it is shrinked.
     * (only works when this layout is inside a linear layout)
     */
    shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    /**
     * Initial size as a layout item.
     * (only works when this layout is inside a linear layout)
     */
    size: PropTypes.string,
    /**
     * Indicates how the current object must be aligned on its layout.
     * (only works when this layout is inside a linear layout)
     */
    selfAlign: PropTypes.oneOf([
      "baseline",
      "stretch",
      "start",
      "end",
      "center"
    ]),
    /* If true, thr button group will be made vertically instead of horizontally */
    vertical: PropTypes.bool
  };
  static defaultProps = {
    grow: false,
    shrink: false,
    size: "auto",
    vertical: false
  };
  render() {
    const { grow, shrink, size, selfAlign, children, vertical } = this.props;
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }
    const classes = classNames("sn-button-group", { vertical });
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
