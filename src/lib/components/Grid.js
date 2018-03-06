import React, { Component } from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import "./Grid.scss";
import layoutElement from "./layoutElement";

class Grid extends Component {
  static propTypes = {
    /**
     * The type of grid.
     * default: Use a block type grid
     * inline: Uses an inline grid
     * partial: It means this grid is really part of a parent grid
     */
    type: PropTypes.oneOf(["default", "inline", "partial"]),
    /**
     * The template/s used for columns and/or rows
     */
    template: PropTypes.shape({
      /**
       * Templates used for the rows.
       * It can be a size, or can be an object with two properties:
       *   - name: A name for referencing, like first or content-start
       *   - size: The size of the track.
       */

      rows: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({ name: PropTypes.string, size: PropTypes.string })
        ])
      ),
      /**
       * Templates used for the columns.
       * It can be a size, or can be an object with two properties:
       *   - name: A name for referencing, like first or content-start
       *   - size: The size of the track.
       */
      columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({ name: PropTypes.string, size: PropTypes.string })
        ])
      )
    }),
    auto: PropTypes.shape({
      /**
       * Templates used for the rows.
       * It can be a size, or can be an object with two properties:
       *   - name: A name for referencing, like first or content-start
       *   - size: The size of the track.
       */

      rows: PropTypes.arrayOf(PropTypes.string),
      /**
       * Templates used for the columns.
       * It can be a size, or can be an object with two properties:
       *   - name: A name for referencing, like first or content-start
       *   - size: The size of the track.
       */
      columns: PropTypes.arrayOf(PropTypes.string),
      /**
       * Extra classes added into the element
       */
      className: PropTypes.string
    }),
    gap: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        rows: PropTypes.string,
        columns: PropTypes.string
      })
    ]),
    areas: PropTypes.arrayOf(PropTypes.string),
    justifyItems: PropTypes.oneOf(["end", "start", "center", "stretch"]),
    alignContent: PropTypes.oneOf(["end", "start", "center", "stretch"]),
    justifyContent: PropTypes.oneOf([
      "start",
      "end",
      "center",
      "stretch",
      "space-around",
      "space-between",
      "space-evenly"
    ]),
    alignItems: PropTypes.oneOf([
      "start",
      "end",
      "center",
      "stretch",
      "space-around",
      "space-between",
      "space-evenly"
    ]),
    /**
     * Specifies how the grid flows with automatic placement.
     * See grid flow CSS for more information.
     */
    flow: PropTypes.oneOf(["row", "column", "dense"]),
    /**
     * The wrapper component class.
     * It can be an string, or a react component class
     */
    component: PropTypes.any
  };

  static defaultProps = {
    type: "default",
    template: { rows: ["1fr"] },
    justifyItems: "stretch",
    alignItems: "stretch",
    justifyContent: "stretch",
    alignContent: "start",
    flow: "row",
    component: "div"
  };

  _buildTemplateElement(row) {
    if (typeof row === "string") {
      return row;
    }
    return `[${row.name}] ${row.size}`;
  }

  _buildTemplates(rows) {
    return rows.map(this._buildTemplateElement).join(" ");
  }

  render() {
    const {
      style,
      children,
      type,
      template,
      areas,
      gap,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      flow,
      auto,
      className,
      component,
      ...props
    } = this.props;
    const classes = classNames(
      "sn-grid",
      {
        inline: type === "inline",
        partial: type === "partial"
      },
      className
    );
    const newStyle = {
      ...style,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      gridAutoFlow: flow
    };
    if (typeof gap === "string") {
      newStyle.gridGap = gap;
    }
    if (gap && typeof gap === "object") {
      if (typeof gap.rows === "string") {
        newStyle.gridRowGap = gap.rows;
      }
      if (typeof gap.columns === "string") {
        newStyle.grodColumnGap = gap.columns;
      }
    }
    if (typeof template.rows !== "undefined") {
      newStyle.gridTemplateRows = this._buildTemplates(template.rows);
    }
    if (typeof template.columns !== "undefined") {
      newStyle.gridTemplateColumns = this._buildTemplates(template.columns);
    }
    if (typeof areas !== "undefined") {
      newStyle.gridTemplateAreas = areas;
    }
    if (auto && typeof auto === "object") {
      if (typeof auto.rows !== "undefined") {
        newStyle.gridAutoRows = this._buildTemplates(auto.rows);
      }
      if (typeof auto.columns !== "undefined") {
        newStyle.gridAutoColumns = this._buildTemplates(auto.columns);
      }
    }
    const ComponentClass = component;
    return (
      <ComponentClass {...props} className={classes} style={newStyle}>
        {children}
      </ComponentClass>
    );
  }
}

export default layoutElement(Grid);
