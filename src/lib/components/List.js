import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import layoutElement from "./layoutElement";
import PerfectScrollbar from "react-perfect-scrollbar";

import "./List.scss";

/**
 * A list is a vertical set of elements.
 * Aligned as a list.
 * Users can click on a list to select it.
 */
class List extends Component {
  static propTypes = {
    selected: PropTypes.any,
    onSelectionChange: PropTypes.func,
    valueComparator: PropTypes.func,
    multiple: PropTypes.bool
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { selected: props.selected };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.selected !== "undefined") {
      this.setState({ selected: nextProps.selected });
    }
  }

  onItemSelect(value) {}

  _isChildSelected(value) {
    const { selected } = this.state;
    const { multiple, valueComparator } = this.props;
    if (multiple && Array.isArray(selected)) {
      if (typeof valueComparator === "function") {
        return selected.filter(i => valueComparator(i, value)).length > 0;
      }
      return selected.indexOf(value) !== -1;
    }
    if (typeof valueComparator === "function") {
      return valueComparator(selected, value);
    }
    return selected === value;
  }

  render() {
    const { children, style } = this.props;
    return (
      <div style={style} className="sn-list">
        <PerfectScrollbar>
          <ul>
            {Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                const value = child.props.value || index;
                return React.cloneElement(child, {
                  value,
                  selected: this._isChildSelected(value),
                  onSelect: this.onItemSelect.bind(value)
                });
              }
              return null;
            })}
          </ul>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default layoutElement(List);
