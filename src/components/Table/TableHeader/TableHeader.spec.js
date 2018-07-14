// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import TableHeader from "./TableHeader";
// Constants
import { ASSERTIONS, STRINGS } from "./../../../test/constants";

const { childText } = STRINGS;

describe(`Table header component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <table>
                <TableHeader>
                    <th>{childText}</th>
                </TableHeader>
            </table>
        );
        expect(wrapper.find("th").length).toEqual(1);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <table>
                <TableHeader qaHook="qahook">
                    <th>{childText}</th>
                </TableHeader>
            </table>
        );
        expect(wrapper.find(".qa-table-thead-qahook").length).toEqual(1);
    });
});
