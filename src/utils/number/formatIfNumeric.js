// Utils
import { formatNumber, isNumeric } from "./../../utils";

/**
 * Formats number to locale string
 * @param  {any} n - value.
 * @return {string} - Formatted number or original string.
 */

const formatIfNumeric = n => (isNumeric(n) ? formatNumber(n) : n);

export default formatIfNumeric;
