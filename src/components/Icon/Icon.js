// Vendor
import React from "react";
import PropTypes from "proptypes";

/**
 * Used to insert an SVG icon into other components.
 */
const Icon = ({ hasAriaHidden = true, className, id }) => (
    <svg aria-hidden={hasAriaHidden} className={className}>
        <use xlinkHref={`#${id}`} />
    </svg>
);

Icon.propTypes = {
    /**
     * For applying styles to a icon.
     */
    className: PropTypes.string,
    /**
     * When set to `true` an icon will be picked up by screen readers.
     */
    hasAriaHidden: PropTypes.bool,
    /**
     * Binds an icon to its matching `<symbol>` element in the master `<svg>` element.
     */
    id: PropTypes.string.isRequired
};

export default Icon;
