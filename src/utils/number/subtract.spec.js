// Vendor
import expect from 'expect';
// Utilities
import subtract from './subtract';


describe('Subtract utility', () => {
    it('should subtract value b from value a', () => {
        expect(subtract(5, 3)).toEqual(2);
    });

    it('should subtract negative values', () => {
        expect(subtract(-5, 3)).toEqual(-8);
    });
});
