import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ModalHeaderPresenter from "./ModalHeaderPresenter";
import "./ModalPresenter.scss";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * Supports adding any dom content to the header of the modal
     */
    headerChildren: PropTypes.node,
    /**
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when one clicks the overlay behind the modal
     */
    onOverlayClick: PropTypes.func,
    /**
     * Triggers when one clicks the modal window
     */
    onWindowClick: PropTypes.func,
    /**
     * Modal is visible when true
     */
    open: PropTypes.bool,
    /**
     * Style of the modal shell
     */
    style: PropTypes.string,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  setScrolling = element => {
    this.hasScrolling = element.scrollHeight > element.clientHeight;
  };

  render() {
    const {
      children,
      headerChildren,
      onCloseClick,
      onOverlayClick,
      onWindowClick,
      open,
      style,
      title
    } = this.props;

    const styleKey = style || "standard";

    const windowClasses = cx([
      "hig__modal-V1__window",
      `hig__modal-V1__window--${styleKey}`
    ]);

    const wrapperClasses = cx([
      "hig__modal-V1",
      {
        "hig__modal-V1--open": open
      }
    ]);

    return (
      <div className={wrapperClasses}>
        <a
          className="hig__modal-V1__overlay"
          onClick={onOverlayClick}
          role="button"
          tabIndex="0"
        >
          <a
            className={windowClasses}
            onClick={onWindowClick}
            role="button"
            tabIndex="0"
          >
            <ModalHeaderPresenter onCloseClick={onCloseClick} title={title}>
              {headerChildren}
            </ModalHeaderPresenter>
            <div className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot">{children}</div>
            </div>
          </a>
        </a>
      </div>
    );
  }
}
