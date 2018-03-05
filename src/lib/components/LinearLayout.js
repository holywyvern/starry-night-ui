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
      "space-arround",
      "space-between"
    ]),
    /**
     * Indicates if the items on the layout should wrap or not.
     * If value is "reverse" the wrap will be in reverse
     */
    wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["reverse"])]),
    /**
     * Indicates the padding of the element.
     */
    padding: PropTypes.string,
    /**
     * Indicates the margin of the element.
     */
    margin: PropTypes.string,
    /**
     * Extra class names
     */
    className: PropTypes.string
  };

  static defaultProps = {
    vertical: false,
    reverse: false,
    wrap: false,
    align: "stretch",
    justify: "start",
    margin: "0",
    padding: "0"
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
      margin,
      padding,
      className
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
      margin,
      padding,
      alignItems: this._addFlexPrefixIfNedded(align),
      justifyContent: this._addFlexPrefixIfNedded(justify)
    };

    return (
      <div className={classes} style={newStyle}>
        {children}
      </div>
    );
  }
}

export default layoutElement(LinearLayout);
