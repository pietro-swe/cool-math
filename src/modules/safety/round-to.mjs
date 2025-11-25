/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param {number} value
 * @param {number} decimals
 * @returns {number}
 */
export function roundTo(value, decimals) {
	if (decimals < 0) {
		throw new RangeError("roundTo: 'decimals' must be non-negative.");
	}

	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}
