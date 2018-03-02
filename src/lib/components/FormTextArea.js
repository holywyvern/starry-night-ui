import React, { Component } from "react";
import PropTypes from "prop-types";

import { addFlexPrefixIfNedded } from "../utils";

class FormTextArea extends Component {
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
    ])
  };
  static defaultProps = {
    grow: false,
    shrink: false,
    size: "auto"
  };
  render() {
    const { grow, shrink, size, selfAlign } = this.props;
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }
    return null;
  }
}

export default FormTextArea;
