import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import layoutElement from "./layoutElement";

import "./Button.scss";

/**
 * A button is an element than responds when an user clicks on it.
 */
class Button extends Component {
  static propTypes = {
    /**
     * Indicates if the button is meant to be a submit button for a form
     */
    submit: PropTypes.bool,
    /**
     * Indicates the type of the button:
     * default is the standard button type
     * primary is using the primary color
     * accent is using the accent color
     */
    type: PropTypes.oneOf(["default", "primary", "accent"]),
    /** Event called when the user clicks on the button */
    onClick: PropTypes.func,
    /** Checks if the button is disabled or not */
    disabled: PropTypes.bool,
    /** Indicates the align of the text inside the button */
    textAlign: PropTypes.oneOf(["center", "end", "start", "right", "left"])
  };
  static defaultProps = {
    submit: false,
    type: "default",
    textAlign: "center"
  };

  render() {
    const {
      submit,
      type,
      textAlign,
      row,
      column,
      area,
      style,
      ...props
    } = this.props;
    const newStyle = {
      ...style,
      textAlign
    };
    const classes = classNames("sn-button", {
      primary: type === "primary",
      accent: type === "accent"
    });
    return (
      <button
        {...props}
        type={submit ? "submit" : "button"}
        className={classes}
        style={newStyle}
      />
    );
  }
}

export default layoutElement(Button);
