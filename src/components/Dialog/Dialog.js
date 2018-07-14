import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { ButtonIconOnly } from "./../../components";
import { ICONS } from "./../../constants";
import "./Dialog.css";

Modal.setAppElement("#root");

const Dialog = ({
    children,
    contentLabel,
    hasCloseButton = true,
    isOpen,
    onRequestClose,
    openModal,
    title
}) => (
    <Modal
        contentLabel={contentLabel}
        className="c-dialog"
        isOpen={isOpen}
        onAfterOpen={openModal}
        onRequestClose={onRequestClose}
        overlayClassName="c-dialog-overlay"
    >
        <div className="c-dialog__header">
            <h3 className="c-dialog__title">{title}</h3>

            {hasCloseButton && (
                <ButtonIconOnly
                    icon={ICONS.cross}
                    onClick={onRequestClose}
                    text="Close"
                />
            )}
        </div>
        {children}
    </Modal>
);

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    contentLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    openModal: PropTypes.func,
    title: PropTypes.string
};

export default Dialog;
