// Vendor
import expect from 'expect';
// Utilities
import matchQueryInArrayOfObjects from './matchQueryInArrayOfObjects';


const testArray = [
    {id: 'dog'},
    {id: 'cat'},
    {id: 'goldfish'},
    {id: 'testymctest'}
];


describe('Match query in array of objects utility', () => {
    it('should return a list of objects with any values matching in the array', () => {
        const check1 = matchQueryInArrayOfObjects(testArray, 'id', 'ca');
        expect(check1.length).toEqual(1);
        expect(check1).toEqual([{id: 'cat'}]);
        const check1a = matchQueryInArrayOfObjects(testArray, 'id', 'o');
        expect(check1a.length).toEqual(2);
        expect(check1a).toEqual([{id: 'dog'}, {id: 'goldfish'}]);
    });

    it('should still match if case is different', () => {
        const check4 = matchQueryInArrayOfObjects(testArray, 'id', 'CA');
        expect(check4.length).toEqual(1);
        expect(check4).toEqual([{id: 'cat'}]);
    });

    it('should return an empty array if the key is not found', () => {
        const check2 = matchQueryInArrayOfObjects(testArray, 'z', 'ca');
        expect(check2.length).toEqual(0);
        expect(check2).toEqual([]);
    });

    it('should return an empty array if the value is not found', () => {
        const check3 = matchQueryInArrayOfObjects(testArray, 'id', 'zzz');
        expect(check3.length).toEqual(0);
        expect(check3).toEqual([]);
    });
});
