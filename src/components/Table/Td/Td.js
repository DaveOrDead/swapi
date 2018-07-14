// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const Td = ({ children, isAlignedRight, qaHook, ...props }) => {
    const classList = classNames({
        "c-table__td": true,
        [`c-table__td--align-right`]: isAlignedRight,
        [`qa-table-td-${qaHook}`]: qaHook
    });

    return (
        <td {...props} className={classList}>
            {children}
        </td>
    );
};

Td.propTypes = {
    /**
     * Child elements.
     */
    children: PropTypes.node.isRequired,
    /**
     * Align a cell's content to the right, only applicable to **numerical** content.
     */
    isAlignedRight: PropTypes.bool,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default Td;
