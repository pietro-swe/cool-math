/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @throws {RangeError} If min is greater than max.
 * @returns {number}
 */
export function clamp(value, min, max) {
	if (min > max) {
		throw new RangeError("clamp: 'min' cannot be greater than 'max'.");
	}

	if (value < min) return min;
	if (value > max) return max;

	return value;
}
