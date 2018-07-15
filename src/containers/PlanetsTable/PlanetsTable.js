// Vendor
import React from "react";
import PropTypes from "prop-types";
// Components
import {
    ButtonLink,
    Table,
    TableBody,
    TableContainer,
    TableHeader,
    TableRow,
    Td,
    Th
} from "./../../components";
// Utils
import { formatIfNumeric } from "./../../utils";

const PlanetsTable = ({ id, planets, viewDetails }) => (
    <TableContainer
        data={planets}
        sortedDirection="desc"
        sortedColumnName="name"
        dataType="string"
    >
        {({ data, sort, sortedDirection, sortedColumnName }) => (
            <Table caption="Planets in the Star Wars universe" id={id}>
                <TableHeader>
                    <Th
                        aria-controls={id}
                        columnName="name"
                        dataType="string"
                        sort={sort}
                        sortedColumnName={sortedColumnName}
                        sortedDirection={sortedDirection}
                    >
                        Name
                    </Th>
                    <Th>Terrain</Th>
                    <Th
                        aria-controls={id}
                        columnName="population"
                        dataType="number"
                        isAlignedRight
                        sort={sort}
                        sortedColumnName={sortedColumnName}
                        sortedDirection={sortedDirection}
                    >
                        Population
                    </Th>
                </TableHeader>
                <TableBody>
                    {data.map((planet, i) => (
                        <TableRow key={i}>
                            <Td>
                                <ButtonLink
                                    onClick={viewDetails}
                                    value={planet.url}
                                    text={planet.name}
                                />
                            </Td>
                            <Td>{planet.terrain}</Td>
                            <Td isAlignedRight>
                                {formatIfNumeric(planet.population)}
                            </Td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )}
    </TableContainer>
);

PlanetsTable.propTypes = {
    /**
     * The table's data, as an array of objects.
     */
    // eslint-disable-next-line react/forbid-prop-types
    planets: PropTypes.array,
    /**
     * The function to trigger the planet details dialog.
     */
    viewDetails: PropTypes.func
};

export default PlanetsTable;
