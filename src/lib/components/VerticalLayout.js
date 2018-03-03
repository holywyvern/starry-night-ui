import React, { Component } from "react";
import PropTypes from "prop-types";

import LinearLayout from "./LinearLayout";

class VerticalLayout extends Component {
  static propTypes = {
    /** Indicate if items must be reversed or not */
    reverse: PropTypes.bool,
    /**
     * Indicates if the current item must expand.
     * If grow is a number, it means wich ratio it is expanded.
     * (only works when this layout is inside another one)
     */
    grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    /**
     * Indicates if the current item must shrink.
     * Tf shrink is a number, it means wich ratio it is shrinked.
     * (only works when this layout is inside another one)
     */
    shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    /** Initial size as a layout item */
    size: PropTypes.string,
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
    reverse: false,
    grow: false,
    shrink: false,
    wrap: false,
    size: "auto",
    padding: "0",
    margin: "0"
  };

  render() {
    return <LinearLayout {...this.props} vertical />;
  }
}

export default VerticalLayout;
