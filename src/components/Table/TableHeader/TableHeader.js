import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
// Components
import TableRow from "../TableRow";

const TableHeader = ({ children, qaHook }) => {
    const classList = classNames({
        "c-table__thead": true,
        [`qa-table-thead-${qaHook}`]: qaHook
    });

    return (
        <thead className={classList}>
            <TableRow>{children}</TableRow>
        </thead>
    );
};

TableHeader.propTypes = {
    /**
     * Child elements: only [Th](/table/th) components.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default TableHeader;
