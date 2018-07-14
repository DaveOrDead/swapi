// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import TableBody from "./TableBody";
// Constants
import { ASSERTIONS, STRINGS } from "./../../../test/constants";

const { childText } = STRINGS;

describe(`Table body component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <table>
                <TableBody>
                    <tr>
                        <td>{childText}</td>
                    </tr>
                </TableBody>
            </table>
        );
        expect(wrapper.find("tr").length).toEqual(1);
        expect(wrapper.find("td").length).toEqual(1);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <table>
                <TableBody qaHook="qahook">
                    <tr>
                        <td>{childText}</td>
                    </tr>
                </TableBody>
            </table>
        );
        expect(wrapper.find(".qa-table-tbody-qahook").length).toEqual(1);
    });
});
