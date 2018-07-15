// Vendor
import React from "react";
import PropTypes from "prop-types";
// Components
import { Icon, Label } from "./../../components";
// Constants
import { ICONS } from "./../../constants";
// Assets
import "./SelectList.css";

/**
 * A select form control (dropdown).
 */
const SelectList = ({
    id,
    disabled,
    isLabelHidden,
    labelText,
    name,
    options,
    placeholder,
    ...props
}) => (
    <p className="c-input-field">
        <Label forId={`id_${name}`} isHidden={isLabelHidden} text={labelText} />
        <span className="c-form-control-select">
            <select
                {...props}
                id={`id_${name}`}
                name={name}
                className="c-form-control-select__control"
                disabled={disabled}
            >
                {placeholder ? (
                    <option disabled value="">
                        {placeholder}
                    </option>
                ) : null}

                {options.map(item => (
                    <option
                        disabled={item.isDisabled}
                        key={item.id}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                ))}
            </select>

            <Icon
                className="c-form-control-select__icon"
                id={ICONS.arrowSolidSmallDown}
            />
        </span>
    </p>
);

SelectList.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    isLabelHidden: PropTypes.bool,
    labelText: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ),
    placeholder: PropTypes.string
};

export default SelectList;
