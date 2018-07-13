// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const TableBody = ({ children, qaHook }) => {
    const classList = classNames({
        "c-table__tbody": true,
        [`qa-table-tbody-${qaHook}`]: qaHook
    });

    return <tbody className={classList}>{children}</tbody>;
};

TableBody.propTypes = {
    /**
     * Child elements: only [Table row] and [Td] components.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default TableBody;
