import React, { Component, Children } from "react";
import PropTypes from "prop-types";

import { addFlexPrefixIfNedded } from "../utils";

import "./NavigationGroup.scss";

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
    const { grow, shrink, size, selfAlign, children, title } = this.props;
    const style = {
      "--grow": grow === true ? 1 : grow === false ? 0 : grow,
      "--shrink": shrink === true ? 1 : shrink === false ? 0 : shrink,
      "--size": size
    };
    if (selfAlign) {
      style.alignSelf = addFlexPrefixIfNedded(selfAlign);
    }

    return (
      <div className="sn-navigation-group" style={style}>
        {title && <div className="title">{title}</div>}
        <ul>
          {Children.map(children, (child, index) => {
            const style = {};
            let grow, shrink, size;
            if (React.isValidElement(child)) {
              grow = child.props.grow;
              shrink = child.props.shrink;
              size = child.props.shrink;
            }
            if (typeof grow !== "undefined") {
              style["--grow"] = grow;
            }
            if (typeof shrink !== "undefined") {
              style["--shrink"] = shrink;
            }
            if (typeof size !== "undefined") {
              style["--size"] = size;
            }
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

export default NavigationGroup;
