import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { addFlexPrefixIfNedded } from "../utils";

import "./Button.scss";

/**
 * A button is an element than responds when an user clicks on it.
 */
class Button extends Component {
  static propTypes = {
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
    size: PropTypes.string,
    /**
     * Indicates how the current object must be aligned on its layout.
     * (only works when this layout is inside a linear layout)
     */
    selfAlign: PropTypes.oneOf([
      "baseline",
      "stretch",
      "start",
      "end",
      "center"
    ]),
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
    disabled: PropTypes.bool
  };
  static defaultProps = {
    grow: false,
    shrink: false,
    submit: false,
    size: "auto",
    type: "default"
  };

  render() {
    const {
      grow,
      shrink,
      submit,
      size,
      type,
      selfAlign,
      ...props
    } = this.props;
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }
    const classes = classNames("sn-button", {
      primary: type === "primary",
      accent: type === "accent"
    });
    return (
      <button
        {...props}
        type={submit ? "submit" : "button"}
        className={classes}
        style={style}
      />
    );
  }
}

export default Button;
