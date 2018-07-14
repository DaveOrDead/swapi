// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import TableRow from "./TableRow";
// Constants
import { ASSERTIONS, STRINGS } from "./../../../test/constants";

const { childText } = STRINGS;

// eslint-disable-next-line react/prop-types
const TableLayout = ({ children }) => (
    <table>
        <tbody>{children}</tbody>
    </table>
);

describe(`Table row component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <TableLayout>
                <TableRow>
                    <td>{childText}</td>
                    <td>{childText}</td>
                </TableRow>
            </TableLayout>
        );
        expect(wrapper.find("td").length).toEqual(2);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <TableLayout>
                <TableRow qaHook="qahook">
                    <td>{childText}</td>
                    <td>{childText}</td>
                </TableRow>
            </TableLayout>
        );
        expect(wrapper.find(".qa-table-tr-qahook").length).toEqual(1);
    });
});
