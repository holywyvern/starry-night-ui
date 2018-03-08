import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import layoutElement from "./layoutElement";

import "./LinearLayout.scss";

/**
 * A linear layout is a one dimensional list of items.
 * The list may or may not wrap and can be either vertical or horizontal
 */
class LinearLayout extends Component {
  static propTypes = {
    /** Indicates if the layout is vertical, if false, it's horizontal */
    vertical: PropTypes.bool,
    /** Indicate if items must be reversed or not */
    reverse: PropTypes.bool,
    /**
     * Aligns the children according to the value.
     */
    align: PropTypes.oneOf(["baseline", "stretch", "start", "end", "center"]),
    /**
     * Justifies the items according to the value.
     */
    justify: PropTypes.oneOf([
      "start",
      "end",
      "center",
      "space-around",
      "space-between"
    ]),
    /**
     * Indicates if the items on the layout should wrap or not.
     * If value is "reverse" the wrap will be in reverse
     */
    wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["reverse"])]),
    /**
     * Extra class names
     */
    className: PropTypes.string,
    /**
     * Component class used for the grid element.
     * Can be either an string or a React component class.
     */
    component: PropTypes.any
  };

  static defaultProps = {
    vertical: false,
    reverse: false,
    wrap: false,
    align: "stretch",
    justify: "start",
    component: "div"
  };

  _addFlexPrefixIfNedded(word) {
    if (word === "start" || word === "end") {
      return `flex-${word}`;
    }
    return word;
  }

  render() {
    const {
      style,
      align,
      justify,
      children,
      vertical,
      reverse,
      wrap,
      className,
      component,
      ...props
    } = this.props;
    const classes = classNames(
      "sn-linear-layout",
      {
        vertical,
        reverse,
        wrap: wrap === true,
        "reverse-wrap": wrap === "reverse"
      },
      className
    );
    const newStyle = {
      ...style,
      alignItems: this._addFlexPrefixIfNedded(align),
      justifyContent: this._addFlexPrefixIfNedded(justify)
    };
    const ComponentClass = component;
    return (
      <ComponentClass {...props} className={classes} style={newStyle}>
        {children}
      </ComponentClass>
    );
  }
}

export default layoutElement(LinearLayout);
