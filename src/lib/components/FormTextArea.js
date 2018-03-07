import React, { Component } from "react";
import PropTypes from "prop-types";
import layoutElement from "./layoutElement";

class FormTextArea extends Component {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    cols: PropTypes.number,
    required: PropTypes.bool,
    wrap: PropTypes.oneOf(["soft", "hard"])
  };
  static defaultProps = {};
  render() {
    return (
      <textarea
        {...this.props}
        className="sn-form-input sn-textarea"
        rows={3}
      />
    );
  }
}

export default layoutElement(FormTextArea);
