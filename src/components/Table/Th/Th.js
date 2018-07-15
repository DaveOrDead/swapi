// Vendor
import React from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
// Components
import Icon from "./../../Icon";
// Constants
import { ICONS, STATE_HOOKS } from "./../../../constants";

const getDirectionFull = dir => (dir === "asc" ? "ascending" : "descending");

const SortButton = ({
    children,
    columnName,
    dataType,
    isSorted,
    sort,
    sortedDirection,
    ...props
}) => {
    const arrowDirection = (isSorted && sortedDirection) || "desc";

    const classList = classNames({
        "c-table__sort-button": true,
        [`c-table__sort-button--${arrowDirection}`]: arrowDirection,
        [STATE_HOOKS.isSorted]: isSorted
    });

    return (
        <button
            {...props}
            className={classList}
            onClick={() => sort(columnName, arrowDirection, isSorted, dataType)}
            type="button"
        >
            {children}
            <Icon
                className="c-table__sort-button-icon"
                id={ICONS.arrowSolidSmallDown}
            />
        </button>
    );
};

const Th = ({
    children,
    columnName,
    isAlignedRight,
    qaHook,
    sort,
    sortedColumnName,
    sortedDirection,
    ...props
}) => {
    const isSorted = columnName && sortedColumnName === columnName;
    const classList = classNames({
        "c-table__th": true,
        "c-table__th--align-right": isAlignedRight,
        "c-table__th--sortable": sort,
        [`qa-table-th-${qaHook}`]: qaHook
    });

    const contentType = sort ? (
        <SortButton
            {...props}
            children={children}
            columnName={columnName}
            isSorted={isSorted}
            sortedDirection={sortedDirection}
            sort={sort}
        />
    ) : (
        children
    );

    return (
        <th
            aria-sort={isSorted ? getDirectionFull(sortedDirection) : null}
            className={classList}
            scope="col"
        >
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
