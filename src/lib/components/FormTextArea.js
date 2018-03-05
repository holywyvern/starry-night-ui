import React, { Component } from "react";
import PropTypes from "prop-types";
import layoutElement from "./layoutElement";

class FormTextArea extends Component {
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
    size: "auto"
  };
  render() {
    const { style } = this.props;
    return <textarea style={style} className="sn-input sn-textarea" />;
  }
}

export default layoutElement(FormTextArea);
