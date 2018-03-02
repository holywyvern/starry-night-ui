import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./Container.scss";

/**
 * The Container is the main application viewport.
 * To properly display your window as one, You should use this component.
 * A container has also a flexbox inside.
 */
class Container extends Component {
  static propTypes = {
    /** Changes the direction from horizontal to vertical */
    vertical: PropTypes.bool
  };
  static defaultProps = {
    vertical: false
  };
  render() {
    const { children, vertical } = this.props;
    const classes = classNames("sn-container", { vertical });
    return <div className={classes}>{children}</div>;
  }
}

export default Container;
