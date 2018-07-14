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

            <input
                {...props}
                autoComplete="off"
                className="c-search-field__input"
                name={name}
                type="search"
                value={value}
            />

            <Icon className="c-search-field__icon" id={ICONS.magnifyingGlass} />
        </div>
    );
};

SearchField.propTypes = {
    /**
     * Visually hides a label.
     */
    isLabelHidden: PropTypes.bool,
    /**
     * Text hat clearly describes a search control.
     */
    labelText: PropTypes.string,
    /**
     * The `name` attribute for the input - the `id` is derived from this.
     */
    name: PropTypes.string,
    /**
     * A value for a search control's `value` attribute to be used in combination with an
     * `onChange` handler.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SearchField;
