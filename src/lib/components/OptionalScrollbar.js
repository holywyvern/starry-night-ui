import React, { Component } from "react";
import PropTypes from "prop-types";

import PerfectScrollbar from "react-perfect-scrollbar";

/**
 * Optional scrollbars are scrollbars than can only appear when added into an element
 * If they are not allowed, they won't be shown at all.
 */
class OptionalScrollbar extends Component {
  static propTypes = {
    /** If true, it will allow elements to be scrolled */
    allowScroll: PropTypes.bool
  };

  static defaultProps = {
    allowScroll: false
  };

  render() {
    const { allowScroll, children } = this.props;
    if (allowScroll) return <PerfectScrollbar>{children}</PerfectScrollbar>;
    return children;
  }
}

export default OptionalScrollbar;
