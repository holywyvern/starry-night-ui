import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatic from "hoist-non-react-statics";

function layoutElement(ComponentClass, defaultProps = {}) {
  /**
   * A layout element is any element allowed to be inside a LinearLayout or a GridLayout
   */
  class LayoutElement extends Component {
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
      /** Extra styles into the object */
      style: PropTypes.object,
      /** Padding of the element */
      padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          top: PropTypes.string,
          left: PropTypes.string,
          right: PropTypes.string,
          bottom: PropTypes.string
        })
      ]),
      /** Margin of the element */
      margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          top: PropTypes.string,
          left: PropTypes.string,
          right: PropTypes.string,
          bottom: PropTypes.string
        })
      ]),
      /** If the element supports it, the height of the element */
      z: PropTypes.number
    };

    static defaultProps = {
      style: {},
      grow: false,
      shrink: false,
      size: "auto",
      z: 0,
      ...defaultProps
    };

    _addFlexPrefixIfNedded(word) {
      if (word === "start" || word === "end") {
        return `flex-${word}`;
      }
      return word;
    }

    _makeFlexStyle(style) {
      const { grow, shrink, size, selfAlign } = this.props;
      style.flexGrow =
        grow === true ? 1 : grow === false ? "0" : grow.toString();
      style.flexShrink =
        shrink === true ? 1 : shrink === false ? "0" : shrink.toString();
      style.flexBasis = size;
      if (selfAlign) {
        style.alignSelf = this._addFlexPrefixIfNedded(selfAlign);
      }
    }

    _makeGridStyle(style) {
      const { area, row, column } = this.props;
      if (typeof area === "string") {
        style.gridArea = area;
      } else if (area && typeof area === "object") {
        style.gridArea = `${area.row.start} / ${area.column.start} / ${
          area.row.end
        } / ${area.column.end}`;
      }
      if (typeof row === "number") {
        style.gridRow = `${row} / ${row + 1}`;
      } else if (typeof row === "string") {
        style.gridRow = row;
      }
      if (typeof column === "number") {
        style.gridColumn = `${column} / ${column + 1}`;
      } else if (typeof column === "string") {
        style.gridColumn = column;
      }
    }

    _makeMarginAndPadding(style) {
      const { margin, padding } = this.props;
      this._makeSpacingValue(style, margin, "margin");
      this._makeSpacingValue(style, padding, "padding");
    }

    _makeSpacingValue(style, values, name) {
      if (typeof values === "string") {
        style[name] = values;
        return;
      }
      if (values && typeof values === "object") {
        if (typeof values.top === "string") {
          style[name + "Top"] = values.top;
        }
        if (typeof values.left === "string") {
          style[name + "Left"] = values.left;
        }
        if (typeof values.right === "string") {
          style[name + "Right"] = values.right;
        }
        if (typeof values.bottom === "string") {
          style[name + "Bottom"] = values.bottom;
        }
      }
    }

    _makeElevation(style) {
      const { z } = this.props;
      style["--z"] = z;
    }

    render() {
      const { children, style } = this.props;
      const newStyle = { ...style };
      this._makeFlexStyle(newStyle);
      this._makeGridStyle(newStyle);
      this._makeMarginAndPadding(newStyle);
      this._makeElevation(newStyle);
      return React.cloneElement(Children.only(children), {
        style: newStyle
      });
    }
  }
  hoistNonReactStatic(ComponentClass, LayoutElement);
  return ({
    grow,
    shrink,
    size,
    style,
    selfAlign,
    area,
    row,
    column,
    padding,
    margin,
    z,
    ...props
  }) => (
    <LayoutElement
      grow={grow}
      shrink={shrink}
      size={size}
      style={style}
      selfAlign={selfAlign}
      area={area}
      row={row}
      column={column}
      padding={padding}
      margin={margin}
      z={z}
    >
      <ComponentClass {...props} />
    </LayoutElement>
  );
}

export default layoutElement;
