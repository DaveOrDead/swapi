// Vendor
import React from "react";
// Components
import {
    Table,
    TableBody,
    TableContainer,
    TableHeader,
    TableRow,
    Td,
    Th
} from "./../../components";
// Utils
import { formatNumber, isNumeric } from "./../../utils";

const PlanetsTable = ({ planets }) => (
    <TableContainer
        data={planets}
        sortedDirection="asc"
        sortedColumnName="name"
    >
        {({ data, sort, sortedDirection, sortedColumnName }) => (
            <Table className="c-table">
                <TableHeader>
                    <Th
                        columnName="name"
                        sort={sort}
                        sortedColumnName={sortedColumnName}
                        sortedDirection={sortedDirection}
                    >
                        Name
                    </Th>
                    <Th>Terrain</Th>
                    <Th
                        columnName="population"
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
                                <a href="/planet/:id">{planet.name}</a>
                            </Td>
                            <Td>
                                <span className="h-sentence-case">
                                    {planet.terrain}
                                </span>
                            </Td>
                            <Td isAlignedRight>
                                {isNumeric(planet.population)
                                    ? formatNumber(planet.population)
                                    : planet.population}
                            </Td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )}
    </TableContainer>
);

export default PlanetsTable;
