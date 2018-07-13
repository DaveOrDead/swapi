// Vendor
import React from "react";
import PropTypes from "prop-types";
// Components
import { Icon, Label } from "./../../components";
// Assets
import "./SearchField.css";
// Constants
import { ICONS } from "./../../constants";

const SearchField = ({
    labelText = "Search",
    isLabelHidden = true,
    name,
    value = "",
    ...props
}) => {
    return (
        <div className="c-search-field">
            <Label
                forId={`id_${name}`}
                isHidden={isLabelHidden}
                text={labelText}
            />

            <Icon className="c-search-field__icon" id={ICONS.magnifyingGlass} />
            <input
                {...props}
                autoComplete="off"
                className="c-search-field__input"
                name={name}
                type="search"
                value={value}
            />
        </div>
    );
};

SearchField.propTypes = {
    isLabelHidden: PropTypes.bool,
    labelText: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SearchField;
