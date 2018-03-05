import React, { Component } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import "react-select/dist/react-select.css";

import "./FormSelect.scss";
import layoutElement from "./layoutElement";

class FormSelect extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    removeSelected: PropTypes.bool,
    onChange: PropTypes.func,
    clearableValue: PropTypes.bool,
    autoload: PropTypes.bool,
    loadOptions: PropTypes.func,
    options: PropTypes.array,
    isLoading: PropTypes.bool,
    valueRenderer: PropTypes.func,
    loadingPlaceholder: PropTypes.node
  };
  static defaultProps = {
    removeSelected: false,
    clearableValue: false,
    autoload: false,
    isLoading: false,
    loadingPlaceholder: false
  };
  render() {
    const {
      name,
      value,
      removeSelected,
      onChange,
      clearableValue,
      autoload,
      loadOptions,
      options,
      isLoading,
      valueRenderer,
      style
    } = this.props;
    const itemProps = {
      name,
      value,
      removeSelected,
      onChange,
      clearableValue,
      autoload,
      loadOptions,
      options,
      isLoading,
      valueRenderer
    };
    return (
      <Select
        {...itemProps}
        className="sn-form-input sn-select"
        wrapperStyle={style}
      />
    );
  }
}

export default layoutElement(FormSelect);
