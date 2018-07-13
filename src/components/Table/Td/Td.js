import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

const Td = ({ children, isAlignedRight, isSortable, qaHook, ...props }) => {
    const classList = classNames({
        "c-table__td": true,
        [`c-table__td--align-right`]: isAlignedRight,
        "c-table__td--sortable": isSortable,
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
     * Used to denote that a cell belongs to a sortable column.
     */
    isSortable: PropTypes.bool,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default Td;
