import React, { Component } from "react";

import LinearLayout from "./LinearLayout";

import OptionalScrollbar from "./OptionalScrollbar";
import Separator from "./Separator";

import "./Navigation.scss";

class Navigation extends Component {
  static defaultProps = {
    padding: "10px"
  };

  render() {
    const {
      allowScroll,
      children,
      padding,
      margin,
      vertical,
      align,
      justify,
      z,
      ...props
    } = this.props;
    return (
      <LinearLayout
        style={{ boxSizing: "content-box" }}
        vertical={!vertical}
        margin={margin}
        className="sn-navigation-wrapper"
        z={z}
        {...props}
      >
        <LinearLayout
          {...props}
          padding={padding}
          className="sn-navigation"
          vertical={vertical}
          align={align}
          justify={justify}
          grow
        >
          <OptionalScrollbar allowScroll={allowScroll}>
            {children}
          </OptionalScrollbar>
        </LinearLayout>
        <Separator />
      </LinearLayout>
    );
  }
}

export default Navigation;
