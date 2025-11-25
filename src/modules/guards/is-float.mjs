/**
 * Checks if a value is a floating-point number.
 * Returns true for valid finite floats (not integers, not NaN, not Infinity).
 *
 * @param {number} n
 * @returns {boolean}
 */
export function isFloat(n) {
	return Number.isFinite(n) && !Number.isInteger(n);
}
