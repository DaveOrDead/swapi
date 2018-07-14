// Vendor
import expect from "expect";
import { mount } from "enzyme";
import React from "react";
// Components
import ButtonLink from "./ButtonLink";
// Constants
import { ASSERTIONS, STRINGS } from "./../../test/constants";

const className = ".c-button-link";

const { buttonText } = STRINGS;

describe(`Button link component`, () => {
    it(`should render`, () => {
        const wrapper = mount(<ButtonLink text={buttonText} />);
        expect(wrapper.find(className).length).toEqual(1);
    });

    it(ASSERTIONS.buttonText, () => {
        const wrapper = mount(<ButtonLink text={buttonText} />);
        expect(wrapper.find(className).text()).toEqual(buttonText);
    });
});
