// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
// Assets
import "./../Table.css";

const Table = ({ caption, children, qaHook, ...props }) => {
    const classList = classNames({
        "c-table": true,
        [`qa-table-${qaHook}`]: qaHook
    });

    return (
        <table {...props} className={classList}>
            {!!caption && (
                <caption className="h-hide-visually">{caption}</caption>
            )}
            {children}
        </table>
    );
};

Table.propTypes = {
    /**
     * A description of the table
     */
    caption: PropTypes.string,
    /**
     * Child elements
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string
};

export default Table;
