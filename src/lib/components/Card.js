import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import Grid from "./Grid";
import VerticalLayout from "./VerticalLayout";
import HorizontalLayout from "./HorizontalLayout";
import OptionalScrollbar from "./OptionalScrollbar";

import "./Card.scss";

class Card extends Component {
  static propTypes = {
    layout: PropTypes.oneOf(["vertical", "horizontal", "grid"]),
    style: PropTypes.object,
    light: PropTypes.bool,
    allowScroll: PropTypes.bool
  };
  static defaultProps = {
    layout: "horizontal",
    style: {},
    light: false,
    allowScroll: false
  };

  render() {
    const {
      style,
      layout,
      light,
      children,
      allowScroll,
      ...props
    } = this.props;
    let ComponentClass = HorizontalLayout;
    if (layout === "vertical") {
      ComponentClass = VerticalLayout;
    } else if (layout === "grid") {
      ComponentClass = Grid;
    }
    const classes = classNames("sn-card", { light });
    return (
      <ComponentClass
        padding="10px"
        margin="10px"
        {...props}
        style={style}
        className={classes}
      >
        <OptionalScrollbar allowScroll={allowScroll}>
          {children}
        </OptionalScrollbar>
      </ComponentClass>
    );
  }
}

export default Card;
