// Vendor
import React from "react";
import PropTypes from "prop-types";
// Assets
import "./DataList.css";

/**
 * A button that looks identical to linked text.
 */
const DataList = ({ children }) => {
    return <dl className="c-data-list">{children}</dl>;
};

DataList.propTypes = {
    /**
     * Child elements.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default DataList;
