/**
 * Normalizes a number into the 0..1 range given a min and max.
 * If min === max, returns 0 to avoid division by zero.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function normalize(value, min, max) {
	if (min === max) return 0;
	return (value - min) / (max - min);
}
