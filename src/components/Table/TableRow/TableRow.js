// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const TableRow = ({ children, qaHook }) => {
    const classList = classNames({
        "c-table__tr": true,
        [`qa-table-tr-${qaHook}`]: qaHook
    });

    return <tr className={classList}>{children}</tr>;
};

TableRow.propTypes = {
    /**
     * Child elements
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default TableRow;
