/**
 * Checks if a number is strictly greater than zero.
 * @param {number} n
 * @returns {boolean}
 */
export function isPositive(n) {
	return Number.isFinite(n) && n > 0;
}
