// Vendor
import React from "react";
import PropTypes from "prop-types";

/**
 * A button that looks identical to linked text.
 */
const DataListItem = ({ title, value }) => {
    return (
        <div className="c-data-list__item">
            <dt className="c-data-list__label">{title}</dt>
            <dd className="c-data-list__value">{value}</dd>
        </div>
    );
};

DataListItem.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
};

export default DataListItem;
