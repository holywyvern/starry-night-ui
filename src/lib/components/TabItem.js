import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./TabItem.scss";

class TabItem extends Component {
  static propTypes = {
    title: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    active: false,
    disabled: false
  };
  render() {
    const { title, active, disabled, onClick } = this.props;
    const classes = classNames("sn-tab-item", { active, disabled });
    return (
      <li
        onClick={!disabled && !active ? onClick : undefined}
        className={classes}
      >
        {title}
      </li>
    );
  }
}

export default TabItem;
