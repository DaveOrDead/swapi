// Utils
import subtract from "./subtract";

/**
 * Compares object keys to sort numerically
 * @param  {string} object key - The field to check against.
 * @param  {string} object 1 - The first object to get the key from.
 * @param  {string} object 2 - The second object to get the key from.
 * @return {func} - subtract function with 2 params
 */

const sortObjectKeyNumbers = field => (a, b) => {
    if (!isFinite(subtract(a[field], b[field]))) {
        return !isFinite(a[field]) ? -1 : 1;
    } else {
        return subtract(a[field], b[field]);
    }
};

export default sortObjectKeyNumbers;
