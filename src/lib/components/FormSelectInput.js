import React, { Component } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import "react-select/dist/react-select.css";

import layoutElement from "./layoutElement";

import "./FormInput.scss";
import "./FormSelectInput.scss";

class FormSelect extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
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

  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue || props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.value !== "undefined") {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = value => {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(value);
    } else {
      this.setState({ value });
    }
  };

  render() {
    const { value } = this.state;
    const {
      name,
      removeSelected,
      clearableValue,
      autoload,
      loadOptions,
      options,
      isLoading,
      valueRenderer,
      style
    } = this.props;
    const itemProps = {
      onChange: this.onChange,
      name,
      value,
      removeSelected,

      clearableValue,
      autoload,
      loadOptions,
      options,
      isLoading,
      valueRenderer
    };
    return <Select {...itemProps} className="sn-select" wrapperStyle={style} />;
  }
}

export default layoutElement(FormSelect);
