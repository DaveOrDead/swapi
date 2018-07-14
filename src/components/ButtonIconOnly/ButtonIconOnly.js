// Vendor
import React from "react";
import PropTypes from "prop-types";
// Components
import { Icon } from "./../../components";
// Assets
import "./ButtonIconOnly.css";

const ButtonIconOnly = ({ icon, text, type = "button", ...props }) => {
    return (
        <button className="c-button-icon-only" type={type} {...props}>
            <span className="h-hide-visually">{text}</span>
            <Icon id={icon} className="c-button-icon-only__icon" />
        </button>
    );
};

ButtonIconOnly.propTypes = {
    /**
     * The icon to be displayed.
     */
    icon: PropTypes.string,
    /**
     * The button text, which clearly describes the action.
     */
    text: PropTypes.string,
    /**
     * The `type` attribute
     */
    type: PropTypes.string
};

export default ButtonIconOnly;
