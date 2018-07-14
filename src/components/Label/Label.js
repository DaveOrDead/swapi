// Vendor
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Assets
import "./Label.css";

const Label = ({ className, forId, isHidden, text, ...props }) => {
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
    /**
     * Override the default styling by applying a custom class.
     */
    className: PropTypes.string,
    /**
     * Binds a label to a form control. This informs screen readers of the relationship and a
     * control will gain focus when a label is clicked.
     */
    forId: PropTypes.string,
    /**
     * Visually hides a label.
     */
    isHidden: PropTypes.bool,
    /**
     * The label text that clearly describes a form control.
     */
    text: PropTypes.string
};

export default Label;
