// Vendor
import React from "react";
import PropTypes from "prop-types";

/**
 * For creating vertical space between components.
 */
const Spacing = ({ children, size }) => (
    <div className={size ? `h-spacing-${size}` : "h-spacing"}>{children}</div>
);

Spacing.propTypes = {
    /**
     * Child elements.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    /**
     * The margin-bottom size class to be applied.
     */
    size: PropTypes.string
};

export default Spacing;
