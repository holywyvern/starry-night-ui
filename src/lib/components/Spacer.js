import React, { Component } from "react";

import PropTypes from "prop-types";

import "./Spacer.scss";
import layoutElement from "./layoutElement";

/**
 * An Spacer is empty space on a linear layout.
 * It does nothing, but add separation
 */
class Spacer extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { style } = this.props;
    return <div className="sn-spacer" style={style} />;
  }
}

export default layoutElement(Spacer);
