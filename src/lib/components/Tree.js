import React, { Component } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";

class Tree extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { style, children } = this.props;
    return <ul style={style}>{children}</ul>;
  }
}

export default layoutElement(Tree);
