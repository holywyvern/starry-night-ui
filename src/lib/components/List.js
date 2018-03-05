import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

/**
 * A list is a vertical set of elements.
 * Aligned as a list.
 * Users can click on a list to select it.
 */
class List extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { children, style } = this.props;
    return <ul style={style}>{children}</ul>;
  }
}

export default layoutElement(List);
