import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import "./NavigationGroup.scss";
import layoutElement from "./layoutElement";

class NavigationGroup extends Component {
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
    title: PropTypes.node
  };
  static defaultProps = {
    grow: false,
    shrink: false,
    size: "auto"
  };
  render() {
    const { style, children, title } = this.props;
    return (
      <div className="sn-navigation-group" style={style}>
        {title && <div className="title">{title}</div>}
        <ul>
          {Children.map(children, (child, index) => {
            return (
              <li style={style} key={index}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default layoutElement(NavigationGroup);
