// Vendor
import React from "react";
import PropTypes from "prop-types";

const DataListItem = ({ title, value }) => {
    return (
        <div className="c-data-list__item">
            <dt className="c-data-list__title">{title}</dt>
            <dd className="c-data-list__value">{value}</dd>
        </div>
    );
};

DataListItem.propTypes = {
    /**
     * The item title.
     */
    title: PropTypes.string,
    /**
     * The item value.
     */
    value: PropTypes.string
};

export default DataListItem;
