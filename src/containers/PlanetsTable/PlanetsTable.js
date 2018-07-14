// Vendor
import React from "react";
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

const PlanetsTable = ({ planets, viewDetails }) => (
    <TableContainer
        data={planets}
        sortedDirection="desc"
        sortedColumnName="name"
        dataType="string"
    >
        {({ data, sort, sortedDirection, sortedColumnName }) => (
            <Table className="c-table">
                <TableHeader>
                    <Th
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
                            <Td>
                                <span className="h-sentence-case">
                                    {planet.terrain}
                                </span>
                            </Td>
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

export default PlanetsTable;
