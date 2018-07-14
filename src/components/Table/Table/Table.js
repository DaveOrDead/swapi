// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
// Assets
import "./../Table.css";

const Table = ({ children, qaHook }) => {
    const classList = classNames({
        "c-table": true,
        [`qa-table-${qaHook}`]: qaHook
    });

    return <table className={classList}>{children}</table>;
};

Table.propTypes = {
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
