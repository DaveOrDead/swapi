/**
 * Returns an array of objects where the given property value matches the query.
 * @param  {Array} arr - An array of objects to filter.
 * @param  {string} key - The object key to be queried against.
 * @param  {string} query - The string to match in the object key's value.
 * @return {Array} - A new array of matching objects.
 */
const matchQueryInArrayOfObjects = (arr = [], key = '', query = '') =>
    arr.filter(obj => obj[key] && obj[key].toLowerCase()
    .includes(query.toLowerCase()));


export default matchQueryInArrayOfObjects;
