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
        isOpen={isOpen}
        onAfterOpen={openModal}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        style={{
            overlay: {
                zIndex: "9999",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                display: "flex",
                justifyContent: "center"
            },
            content: {
                border: "none",
                borderTop: "3px solid #9e4f60",
                borderRadius: "0 0 0.5rem 0.5rem",
                backgroundColor: "#282727",
                backgroundImage:
                    "url('https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top-dca2c5ab1b2e.png')",
                backgroundSize: "7px",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "top left",
                bottom: "auto",
                margin: "0 auto",
                minWidth: "20rem",
                maxWidth: "30rem",
                overflow: "hidden",
                padding: "0.75rem 1.25rem 2rem",
                top: "var(--g-spacing-2x-large)",
                left: "auto",
                right: "auto"
            }
        }}
    >
        <div className="c-dialog-header">
            <h3 className="c-dialog-title">{title}</h3>

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
