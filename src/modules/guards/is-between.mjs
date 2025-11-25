/**
 * Checks if a number is within a closed interval [min, max].
 *
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @throws {RangeError} If min > max.
 * @returns {boolean}
 */
export function isBetween(n, min, max) {
	if (min > max) {
		throw new RangeError("isBetween: 'min' cannot be greater than 'max'.");
	}
	return n >= min && n <= max;
}
