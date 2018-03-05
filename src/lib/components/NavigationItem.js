import React, { Component } from "react";
import PropTypes from "prop-types";

import "./NavigationItem.scss";
import layoutElement from "./layoutElement";

class NavigationItem extends Component {
  static propTypes = {
    /** URI used when clicking on the element */
    href: PropTypes.string,
    /** Event handler for when the user clicks the element */
    onClick: PropTypes.func,
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
    size: PropTypes.string
  };

  static defaultProps = {
    href: "#"
  };

  render() {
    const { children, grow, shrink, size, ...props } = this.props;
    return (
      <a {...props} className="sn-navigation-item">
        {children}
      </a>
    );
  }
}

export default layoutElement(NavigationItem);
