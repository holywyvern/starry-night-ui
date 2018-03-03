import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { addFlexPrefixIfNedded } from "../utils";

import "./LinearLayout.scss";

/**
 * A linear layout is a one dimensional list of items.
 * The list may or may not wrap and can be either vertical or horizontal
 */
class LinearLayout extends Component {
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
    /**
     * Initial size as a layout item.
     * (only works when this layout is inside a linear layout)
     */
    size: PropTypes.string,
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
    margin: PropTypes.string
  };

  static defaultProps = {
    grow: false,
    shrink: false,
    size: "auto",
    vertical: false,
    reverse: false,
    wrap: false,
    align: "stretch",
    justify: "start",
    margin: "0",
    padding: "0"
  };

  render() {
    const {
      children,
      vertical,
      reverse,
      grow,
      shrink,
      size,
      wrap,
      align,
      justify,
      selfAlign,
      margin,
      padding
    } = this.props;
    const classes = classNames("sn-linear-layout", {
      vertical,
      reverse,
      wrap: wrap === true,
      "reverse-wrap": wrap === "reverse"
    });
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size,
      margin,
      padding,
      alignItems: addFlexPrefixIfNedded(align),
      justifyContent: addFlexPrefixIfNedded(justify)
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default LinearLayout;
