import React, { Component } from "react";

import PropTypes from "prop-types";

import "./Spacer.scss";

/**
 * An Spacer is empty space on a linear layout.
 * It does nothing, but add separation
 */
class Spacer extends Component {
  static propTypes = {
    grow: PropTypes.number,
    shrink: PropTypes.number,
    size: PropTypes.string
  };

  static defaultProps = {
    grow: 1,
    shrink: 1,
    size: "auto"
  };

  render() {
    const { grow, shrink, size } = this.props;
    const style = {
      "--grow": grow,
      "--shrink": shrink,
      "--size": size
    };
    return <div className="sn-spacer" style={style} />;
  }
}

export default Spacer;
