import React, { Component } from "react";
import PropTypes from "prop-types";

import "./NavigationItem.scss";

class NavigationItem extends Component {
  static propTypes = {
    /** URI used when clicking on the element */
    href: PropTypes.string,
    /** Event handler for when the user clicks the element */
    onClick: PropTypes.func
  };

  static defaultProps = {
    href: "#"
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <li className="sn-navigation-item">
        <a {...props}>{children}</a>
      </li>
    );
  }
}

export default NavigationItem;