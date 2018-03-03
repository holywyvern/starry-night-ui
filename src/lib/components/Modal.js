import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./Modal.scss";

/**
 * A modal is an element than shows over the screen, stopping all user interaction
 * from the rest of the site until the Modal is closed
 */
class Modal extends Component {
  static propTypes = {
    /** The title of the modal window */
    title: PropTypes.node,
    /** If true, the modal will be open */
    open: PropTypes.bool,
    /**
     * Callback for when closing the window, if no one is provided,
     * no close button will be present.
     */
    onClose: PropTypes.func,
    /**
     * Indicates than clicking on the background will do the same as the close action.
     */
    closeOnBackgroundClick: PropTypes.func,
    /** Indicates the body of the modal is oriented vertically instead of horizontally */
    vertical: PropTypes.bool
  };

  static defaultProps = {
    open: false,
    vertical: false,
    closeOnBackgroundClick: false
  };

  stopPropagation(event) {
    event.stopPropagation();
  }
  render() {
    const {
      children,
      title,
      open,
      onClose,
      vertical,
      closeOnBackgroundClick
    } = this.props;
    const classes = classNames("sn-modal-container", { open });
    const bodyClasses = classNames("body", { vertical });
    return (
      <div
        className={classes}
        onClick={closeOnBackgroundClick ? onClose : undefined}
      >
        <div className="sn-modal" onClick={this.stopPropagation}>
          {title || onClose ? (
            <div className="header">
              <h3>{title}</h3>
              {onClose ? (
                <button type="button" onClick={onClose}>
                  &times;
                </button>
              ) : null}
            </div>
          ) : null}
          <div className={bodyClasses}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
