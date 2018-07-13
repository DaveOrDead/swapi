/**
 * Compares string `a` to string `b` and returns `a` value to indicate alphabetic order.
 * @param  {string} a - First string to compare.
 * @param  {string} b - Second string to compare.
 * @return {number} - Returns 0 if strings are the same, -1 if `b` is alphabetically greater and 1
 * if string `a` is greater.
 */
const alphabetise = (a, b) => {
    const stringA = a.toUpperCase(); // Ignore differences in case
    const stringB = b.toUpperCase();
    let val = 0;

    if (stringA > stringB) {
        val = 1;
    } else if (stringA < stringB) {
        val = -1;
    }

    return val;
};


export default alphabetise;
