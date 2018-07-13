// Vendor
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Assets
import "./Label.css";

const Label = ({ forId, className, isHidden, text, ...props }) => {
    const classes = classNames({
        "c-input-field__label": !className,
        [className]: className,
        "h-hide-visually": isHidden
    });
    return (
        <label className={classes} htmlFor={forId}>
            {text}
        </label>
    );
};

Label.propTypes = {
    className: PropTypes.string,
    forId: PropTypes.string,
    isHidden: PropTypes.bool,
    text: PropTypes.string
};

export default Label;
