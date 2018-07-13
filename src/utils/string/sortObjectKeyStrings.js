// Utils
import alphabetise from "./alphabetise";

/**
 * Compares object keys to sort alphabetically
 * @param  {string} object key - The field to check against.
 * @param  {string} object 1 - The first object to get the key from.
 * @param  {string} object 2 - The second object to get the key from.
 * @return {func} - alphabetise function with 2 string params
 */

const sortObjectKeyStrings = field => (a, b) => alphabetise(a[field], b[field]);

export default sortObjectKeyStrings;
