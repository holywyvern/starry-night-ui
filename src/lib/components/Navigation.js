import React from "react";

import LinearLayout from "./LinearLayout";

import OptionalScrollbar from "./OptionalScrollbar";

import "./Navigation.scss";

const Navigation = ({ allowScroll, children, ...props }) => (
  <LinearLayout padding="10px" {...props} className="sn-navigation">
    <OptionalScrollbar allowScroll={allowScroll}>{children}</OptionalScrollbar>
  </LinearLayout>
);

export default Navigation;
