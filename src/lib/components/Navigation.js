import React from "react";

import "./Navigation.scss";
import LinearLayout from "./LinearLayout";

const Navigation = props => (
  <LinearLayout padding="10px" {...props} className="sn-navigation" />
);

export default Navigation;
