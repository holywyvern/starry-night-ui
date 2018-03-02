import React, { Component } from "react";
import PropTypes from "prop-types";

import LinearLayout from "./LinearLayout";

class HorizontalLayout extends Component {
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
    wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["reverse"])])
  };

  static defaultProps = {
    reverse: false,
    grow: false,
    shrink: false,
    wrap: false,
    size: "auto"
  };

  render() {
    return <LinearLayout {...this.props} />;
  }
}

export default HorizontalLayout;
