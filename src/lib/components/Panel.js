import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import OptionalScrollbar from "./OptionalScrollbar";

import LinearLayout from "./LinearLayout";

import layoutElement from "./layoutElement";

import "./Panel.scss";

class Panel extends Component {
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
    /* If true, the panel will add scrollbars if needed, if not it will hide all overflowing content */
    allowScroll: PropTypes.bool
  };

  static defaultProps = {
    vertical: false,
    reverse: false,
    wrap: false,
    allowScroll: false,
    align: "stretch",
    justify: "start"
  };

  render() {
    const { allowScroll, children, ...props } = this.props;

    return (
      <LinearLayout {...props} grow shrink className="sn-panel">
        <OptionalScrollbar allowScroll={allowScroll}>
          {children}
        </OptionalScrollbar>
      </LinearLayout>
    );
  }
}

export default layoutElement(Panel);
