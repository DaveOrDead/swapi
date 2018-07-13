// Vendor
import expect from 'expect';
// Utilities
import alphabetise from './alphabetise';


describe('Alphabetise utility', () => {
    it('should return "1" when a is alphabetically greater than b', () => {
        expect(alphabetise('Milk', 'Bread')).toEqual(1);
    });

    it('should return "-1" when b is alphabetically greater than a', () => {
        expect(alphabetise('Bread', 'Milk')).toEqual(-1);
    });

    it('should return "0" when a is the same as b', () => {
        expect(alphabetise('Bread', 'Bread')).toEqual(0);
    });
});
