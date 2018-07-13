// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
// Components
import Icon from "./../../Icon";
// Constants
import { ICONS, STATE_HOOKS } from "./../../../constants";

const Th = ({
    children,
    isAlignedRight,
    qaHook,
    sort,
    columnName,
    sortedColumnName,
    sortedDirection,
    ...props
}) => {
    const isSorted = sortedColumnName === columnName;
    const arrowDirection = (isSorted && sortedDirection) || "desc";

    const classList = classNames({
        "c-table__th": true,
        "c-table__th--align-right": isAlignedRight,
        "c-table__th--sortable": sort,
        [`qa-table-th-${qaHook}`]: qaHook
    });

    const classListInner = classNames({
        "c-table__sort-button": sort,
        [`c-table__sort-button--${arrowDirection}`]: arrowDirection,
        [STATE_HOOKS.isSorted]: isSorted
    });

    const sortColumn = (field, direction, sorted) => () =>
        sort(field, direction, sorted);

    const sortButton = (
        <button
            className={classListInner}
            onClick={sortColumn(columnName, arrowDirection, isSorted)}
            type="button"
        >
            {children}

            <Icon
                className="c-table__sort-button-icon"
                id={ICONS.arrowSolidSmallDown}
            />
        </button>
    );

    const contentType = sort ? sortButton : children;

    return (
        <th {...props} className={classList} scope="col">
            {contentType}
        </th>
    );
};

Th.propTypes = {
    /**
     * An identifier required for all cells in a sortable column to enable it to be sorted.
     */
    columnName: PropTypes.string,
    /**
     * Child elements, which should always include heading text that clearly describes the column.
     */
    children: PropTypes.node.isRequired,

    /**
     * Align a cell's content to the right, only applicable when a [Td](/table/td) component's
     * content is **numerical**.
     */
    isAlignedRight: PropTypes.bool,
    /**
     * Adds a unique hook for automated tests.
     */
    qaHook: PropTypes.string,
    /**
     * A function that is passed down from a [Table container](/table/container) component
     * which triggers when a sort button is pressed.
     */
    sort: PropTypes.func,

    /**
     * Makes a table column be sorted either in ascending order or descending order.
     */
    sortedDirection: PropTypes.oneOf(["asc", "desc"])
};

export default Th;
