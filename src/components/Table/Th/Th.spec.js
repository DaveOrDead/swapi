// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import Th from "./Th";
// Constants
import { STATE_HOOKS } from "./../../../constants";
import { ASSERTIONS, STRINGS } from "./../../../test/constants";

// eslint-disable-next-line react/prop-types
const TableLayout = ({ children }) => (
    <table>
        <thead>
            <tr>{children}</tr>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
            </tr>
        </tbody>
    </table>
);

const { childText, descriptionText, textNode } = STRINGS;

const className = ".c-table__th";

describe(`Th component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th>
                    <span>{childText}</span>
                </Th>
            </TableLayout>
        );
        expect(wrapper.find("span").length).toEqual(1);
    });

    it(`${ASSERTIONS.modifierClass} "align right"`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th isAlignedRight>{textNode}</Th>
            </TableLayout>
        );
        expect(wrapper.find(`${className}--align-right`).length).toEqual(1);
    });

    it(`should render modifier class when "sort" function provided`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th sort={() => {}}>{textNode}</Th>
            </TableLayout>
        );
        expect(wrapper.find(`${className}--sortable`).length).toEqual(1);
    });

    it(`should render a button element when "sort" function provided`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th sort={() => {}}>{textNode}</Th>
            </TableLayout>
        );
        expect(wrapper.find("button.c-table__sort-button").length).toEqual(1);
    });

    it(`should render a button modifier class for "sortedDirection"`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th sort={() => {}} sortedDirection="asc">
                    {textNode}
                </Th>
            </TableLayout>
        );
        expect(wrapper.find("button.c-table__sort-button--asc").length).toEqual(
            1
        );
    });

    it(`${ASSERTIONS.stateHook} "isSorted"`, () => {
        const wrapper = mount(
            <TableLayout>
                <Th isSorted sort={() => {}}>
                    {textNode}
                </Th>
            </TableLayout>
        );
        expect(wrapper.find(`.${STATE_HOOKS.isSorted}`).length).toEqual(1);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <TableLayout>
                <Th qaHook="qahook">{textNode}</Th>
            </TableLayout>
        );
        expect(wrapper.find(".qa-table-th-qahook").length).toEqual(1);
    });
});
