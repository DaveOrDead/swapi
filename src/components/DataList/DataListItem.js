// Vendor
import React from "react";
import PropTypes from "prop-types";

const DataListItem = ({ title, value }) => {
    const values = typeof value === "string" ? [value] : value;
    return (
        <div className="c-data-list__item">
            <dt className="c-data-list__title">{title}</dt>
            {values.map((v, i) => (
                <dd key={i} className="c-data-list__value">
                    {v}
                </dd>
            ))}
        </div>
    );
};

DataListItem.propTypes = {
    /**
     * The item title.
     */
    title: PropTypes.string
};

export default DataListItem;
