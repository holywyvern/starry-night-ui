import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./TabItem.scss";

class TabItem extends Component {
  static propTypes = {
    title: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    allowScroll: PropTypes.bool
  };
  static defaultProps = {
    active: false,
    disabled: false
  };
  render() {
    const { title, active, disabled, onClick, onClose } = this.props;
    const classes = classNames("sn-tab-item", { active, disabled });
    return (
      <li className={classes}>
        <div
          className="label"
          onClick={!disabled && !active ? onClick : undefined}
        >
          {title}
        </div>
        {onClose ? <button onClick={onClose}>&times;</button> : null}
      </li>
    );
  }
}

export default TabItem;
