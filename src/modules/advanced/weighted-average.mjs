/**
 * Computes the weighted average of values with corresponding weights.
 *
 * @param {number[]} values
 * @param {number[]} weights
 * @returns {number}
 */
export function weightedAverage(values, weights) {
	const n = values.length;

	if (n === 0 || weights.length !== n) return 0;

	let weightedSum = 0;
	let weightSum = 0;

	for (let i = 0; i < n; i++) {
		weightedSum += values[i] * weights[i];
		weightSum += weights[i];
	}

	return weightSum === 0 ? 0 : weightedSum / weightSum;
}
