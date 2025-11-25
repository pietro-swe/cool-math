/**
 * Checks if a number is strictly less than zero.
 * @param {number} n
 * @returns {boolean}
 */
export function isNegative(n) {
	return Number.isFinite(n) && n < 0;
}
