/**
 * Computes the z-score of a value given `mean` and `std` deviation.
 *
 * `z = (value - mean) / std`
 *
 * @param {number} value
 * @param {number} mean
 * @param {number} std
 * @returns {number}
 */
export function zScore(value, mean, std) {
	if (std === 0) return 0;
	return (value - mean) / std;
}
