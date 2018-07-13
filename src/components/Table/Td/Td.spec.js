// Vendor
import expect from 'expect';
import {mount} from 'enzyme';
import React from 'react';
// Components
import Td from './Td';
// Constants
import {ASSERTIONS, STRINGS} from './../../../test/constants';


const {childText} = STRINGS;

// eslint-disable-next-line react/prop-types
const TableLayout = ({children}) => (
    <table>
        <tbody>
            <tr>{children}</tr>
        </tbody>
    </table>
);


describe(`Td component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <TableLayout>
                <Td>
                    <span>{childText}</span>
                </Td>
            </TableLayout>
        );
        expect(wrapper.find('span').length).toEqual(1);
    });

    it(`${ASSERTIONS.modifierClass} "align right"`, () => {
        const wrapper = mount(
            <TableLayout>
                <Td isAlignedRight>
                    I am Td text
                </Td>
            </TableLayout>
        );
        expect(wrapper.find('.c-table__td--align-right').length).toEqual(1);
    });

    it(`${ASSERTIONS.modifierClass} "is sortable"`, () => {
        const wrapper = mount(
            <TableLayout>
                <Td isSortable>
                    I am Td text
                </Td>
            </TableLayout>
        );
        expect(wrapper.find('.c-table__td--sortable').length).toEqual(1);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <TableLayout>
                <Td qaHook="qahook">
                    I am Td text
                </Td>
            </TableLayout>
        );
        expect(wrapper.find('.qa-table-td-qahook').length).toEqual(1);
    });
});
