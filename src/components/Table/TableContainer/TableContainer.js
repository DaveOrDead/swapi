// Vendor
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PropTypes from "proptypes";
// Utils
import { sortObjectKeyStrings, sortObjectKeyNumbers } from "./../../../utils";

const reverseDirection = dir => (dir === "asc" ? "desc" : "asc");

const getSortFunctionByType = dataType =>
    dataType === "number" ? sortObjectKeyNumbers : sortObjectKeyStrings;

const sort = ({ sortedColumnName, data, sortedDirection, dataType }) => {
    const func = getSortFunctionByType(dataType);
    const sortedData = data.sort(func(sortedColumnName));
    return sortedDirection === "desc" ? sortedData : sortedData.reverse();
};

class TableContainer extends Component {
    state = {
        data: sort({ ...this.props }),
        sortedDirection: reverseDirection(this.props.sortedDirection),
        sortedColumnName: this.props.sortedColumnName
    };

    onSort = (sortedColumnName, sortedDirection, isSorted, dataType) => {
        const { data } = this.state;
        const sortedData = !isSorted
            ? sort({
                  sortedColumnName,
                  data,
                  sortedDirection,
                  dataType
              })
            : data.reverse();
        this.setState({
            data: sortedData,
            sortedDirection: reverseDirection(sortedDirection),
            sortedColumnName
        });
    };

    render() {
        const { children: render } = this.props;
        return render({
            sort: this.onSort,
            ...this.state
        });
    }
}

TableContainer.propTypes = {
    /**
     * A function which wraps a table element.
     */
    children: PropTypes.func.isRequired,
    /**
     * A table's data, as an array of objects.
     */
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array,
    /**
     * The direction of the currently sorted column, either in an ascending or descending
     * direction.
     */
    sortedDirection: PropTypes.string,
    /**
     * A name of the data property to sort by default
     */
    sortedColumnName: PropTypes.string
};

export default TableContainer;
