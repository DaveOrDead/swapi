// Vendor
import expect from 'expect';
import {mount} from 'enzyme';
import React from 'react';
// Components
import Table from './Table';
// Constants
import {ASSERTIONS, STRINGS} from './../../../test/constants';


const {childText} = STRINGS;

describe(`Table component`, () => {
    it(`should render`, () => {
        const wrapper = mount(
            <Table>
                <tbody>
                    <tr>
                        <td>{childText}</td>
                    </tr>
                    <tr>
                        <td>{childText}</td>
                    </tr>
                </tbody>
            </Table>
        );
        expect(wrapper.find('tr').length).toEqual(2);
        expect(wrapper.find('td').length).toEqual(2);
    });

    it(ASSERTIONS.qaHook, () => {
        const wrapper = mount(
            <Table qaHook="qahook">
                <tbody>
                    <tr>
                        <td>{childText}</td>
                    </tr>
                </tbody>
            </Table>
        );
        expect(wrapper.find('.qa-table-qahook').length).toEqual(1);
    });
});
