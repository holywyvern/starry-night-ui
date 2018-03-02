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
    return (
      <li className="sn-navigation-item">
        <a {...this.props} />
      </li>
    );
  }
}

export default NavigationItem;
