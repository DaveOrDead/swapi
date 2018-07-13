// Vendor
import expect from "expect";
// Utilities
import formatNumber from "./formatNumber";

describe("Number with commas utility", () => {
    it("should apply commas as thousand separators to a 1 thousand number", () => {
        expect(formatNumber(1234)).toEqual("1,234");
    });

    it("should apply commas as thousand separators to a 10 thousand number", () => {
        expect(formatNumber(12456)).toEqual("12,456");
    });

    it("should apply commas as thousand separators to a 100 thousand number", () => {
        expect(formatNumber(123456)).toEqual("123,456");
    });

    it("should apply commas as thousand separators to a 1m number", () => {
        expect(formatNumber(1234567)).toEqual("1,234,567");
    });

    it("should apply commas as thousand separators to a 1b number", () => {
        expect(formatNumber(1234567890)).toEqual("1,234,567,890");
    });

    it("should apply commas as thousand separators to a negative number", () => {
        expect(formatNumber(-1234)).toEqual("-1,234");
    });
});
