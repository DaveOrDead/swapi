// Vendor
import React from "react";
import PropTypes from "prop-types";
// Assets
import "./ButtonLink.css";

/**
 * A button that looks identical to linked text.
 */
const ButtonLink = ({ text, ...props }) => {
    return (
        <button {...props} className="c-button-link" type="button">
            {text}
        </button>
    );
};

ButtonLink.propTypes = {
    /**
     * The button text, which clearly describes the action.
     */
    text: PropTypes.string.isRequired
};

export default ButtonLink;
