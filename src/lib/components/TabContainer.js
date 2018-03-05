import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import "./TabContainer.scss";
import OptionalScrollbar from "./OptionalScrollbar";
import layoutElement from "./layoutElement";

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
    onSelect: PropTypes.func,
    /**
     * If placed on a grid, indicates the current grid rowspan
     */
    row: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      })
    ]),
    /**
     * If placed on a grid, indicates the current grid colspan
     */

    column: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      })
    ]),
    /**
     * If placed on a grid, indicates the current grid area
     */

    area: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        row: PropTypes.shape({
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired
        }).isRequired,
        column: PropTypes.shape({
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired
        }).isRequired
      })
    ])
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

export default layoutElement(TabContainer, { grow: true, shrink: true });
