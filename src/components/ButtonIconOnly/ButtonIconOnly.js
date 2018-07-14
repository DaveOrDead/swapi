// Vendor
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from "./../../components";
import "./ButtonIconOnly.css";

const ButtonIconOnly = ({
    icon,
    iconClasses,
    isLarge,
    text,
    type = "button",
    ...props
}) => {
    const classes = classNames({
        "c-button-icon-only__icon": true,
        "c-button-icon-only__icon--large": isLarge,
        [iconClasses]: iconClasses
    });
    return (
        <button className="c-button-icon-only" type={type} {...props}>
            <span className="h-hide-visually">{text}</span>
            <Icon id={icon} className={classes} />
        </button>
    );
};

ButtonIconOnly.propTypes = {
    icon: PropTypes.string,
    iconClasses: PropTypes.string,
    isLarge: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.string
};

export default ButtonIconOnly;
