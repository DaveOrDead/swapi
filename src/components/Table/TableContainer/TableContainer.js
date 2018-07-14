// Vendor
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PropTypes from "proptypes";
// Utils
import { sortObjectKeyStrings, sortObjectKeyNumbers } from "./../../../utils";

const getSortFunctionByType = dataType =>
    dataType === "number" ? sortObjectKeyNumbers : sortObjectKeyStrings;

const sort = (field, data, dataType) => {
    const func = getSortFunctionByType(dataType);
    return data.sort(func(field));
};

class TableContainer extends Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
        this.state = {
            data: null,
            sortedColumnName: null
        };
    }

    componentWillMount() {
        const { data, sortedColumnName, sortedDirection } = this.props;
        const sortedData = sortedColumnName
            ? sort(sortedColumnName, data)
            : data;

        this.setState({
            data:
                sortedDirection === "desc" ? sortedData : sortedData.reverse(),
            sortedDirection,
            sortedColumnName
        });
    }

    onSort(field, currentSortedDirection, isSorted, dataType) {
        const { data } = this.state;
        const sortedData = !isSorted ? sort(field, data, dataType) : data;

        this.setState({
            data: !isSorted ? sortedData : sortedData.reverse(),
            sortedDirection: currentSortedDirection === "asc" ? "desc" : "asc",
            sortedColumnName: field
        });
    }

    render() {
        const { children: render } = this.props;

        const { data, sortedDirection, sortedColumnName } = this.state;

        return render({
            data,
            sort: this.onSort,
            sortedDirection,
            sortedColumnName
        });
    }
}

TableContainer.propTypes = {
    /**
     * A function which wraps a child element: only a [Table](/table/table) component.
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
     * A name of the data property to sort by default, for example, if one of your objects from
     * the `data` property looked like this:
     *
     * ```
     * {
     *     created: '12 Nov 2016',
     *     emails: 3,
     *     id: 11234,
     *     listName: 'Hawkland Raiders',
     *     sent: 0,
     *     status: 'inactive'
     * }
     * ```
     *
     * And you wanted to sort by the `listName` property then the `sortedColumnName` property
     * would look like this: `sortedColumnName={listName}`.
     */
    sortedColumnName: PropTypes.string
};

export default TableContainer;
