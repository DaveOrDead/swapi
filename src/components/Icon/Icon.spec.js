// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import Icon from "./Icon";
// Constants
import { CLASSNAMES } from "./../../test/constants";

const customClassName = CLASSNAMES.customComponent;

const id = "id-value";

describe(`Icon component (private)`, () => {
    it(`should render`, () => {
        const wrapper = mount(<Icon id={id} />);
        expect(wrapper.find("svg").length).toEqual(1);
    });

    it(`should render same value for the "<use>" element's "xlink:href" attribute as the
        "id" prop`, () => {
        const wrapper = mount(<Icon id={id} />);
        expect(wrapper.find("use").props().xlinkHref).toBe(`#${id}`);
    });

    it(`should render "aria-hidden" as "false" when "hasAriaHidden" is "false"`, () => {
        const wrapper = mount(<Icon hasAriaHidden={false} id={id} />);
        expect(wrapper.find(`svg[aria-hidden=${false}]`).length).toEqual(1);
    });

    it(`should render class`, () => {
        const wrapper = mount(<Icon className={customClassName} id={id} />);
        expect(wrapper.find(`.${customClassName}`).length).toEqual(1);
    });
});
