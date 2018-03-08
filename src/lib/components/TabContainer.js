import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import "./TabContainer.scss";
import OptionalScrollbar from "./OptionalScrollbar";
import layoutElement from "./layoutElement";

class TabContainer extends Component {
  static propTypes = {
    /** Index of the currently selected tab */
    selected: PropTypes.number,
    /** Callback when an user selects a tab */
    onSelect: PropTypes.func
  };
  static defaultProps = {
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
    const { style, children, onSelect, onClose } = this.props;
    const { selected } = this.state;
    const realOnSelect = onSelect || this.onSelect;
    const childrenList = Children.toArray(children);
    const current = childrenList[selected];
    return (
      <div className="sn-tab-container" style={style}>
        <div className="contents">
          <OptionalScrollbar
            allowScroll={
              React.isValidElement(current) && current.props.allowScroll
            }
          >
            {React.isValidElement(current) && current.props.children}
          </OptionalScrollbar>
        </div>

        <ul>
          {childrenList.map((child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                active: selected === index,
                onClick: () => realOnSelect(index),
                onClose:
                  typeof onClose === "function"
                    ? () => onClose(index)
                    : child.props.onClose
              });
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

export default layoutElement(TabContainer, { z: 2 });
