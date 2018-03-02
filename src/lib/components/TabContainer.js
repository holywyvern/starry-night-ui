import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import { addFlexPrefixIfNedded } from "../utils";

import "./TabContainer.scss";

class TabContainer extends Component {
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
    /** Index of the currently selected tab */
    selected: PropTypes.number,
    /** Callback when an user selects a tab */
    onSelect: PropTypes.func
  };
  static defaultProps = {
    grow: false,
    shrink: false,
    size: "auto",
    selected: 0
  };

  constructor(props) {
    super(props);
    this.state = { selected: props.selected };
  }

  onSelect = selected => {
    this.setState({ selected });
  };

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.selected === "number") {
      this.setState({ selected: nextProps.selected });
    }
  }

  render() {
    const { grow, shrink, size, selfAlign, children, onSelect } = this.props;
    const { selected } = this.state;
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }
    const realOnSelect = onSelect || this.onSelect;
    const childrenList = Children.toArray(children);
    const current = childrenList[selected];
    return (
      <div className="sn-tab-container">
        <ul>
          {childrenList.map((child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                active: selected === index,
                onClick: () => realOnSelect(index)
              });
            }
          })}
        </ul>
        <div className="contents">
          {React.isValidElement(current) && current.props.children}
        </div>
      </div>
    );
  }
}

export default TabContainer;
