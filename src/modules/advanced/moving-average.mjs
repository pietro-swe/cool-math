/**
 * Computes the moving average over a sliding window.
 *
 * @example
 * ```js
 * movingAverage([1, 2, 3, 4], 2) → [1.5, 2.5, 3.5]
 * ```
 *
 * @param {number[]} numbers
 * @param {number} windowSize
 *
 * @returns {number[]}
 */
export function movingAverage(numbers, windowSize) {
	const n = numbers.length;
	if (n === 0 || windowSize <= 0) return [];

	const result = [];
	let windowSum = 0;

	for (let i = 0; i < n; i++) {
		windowSum += numbers[i];

		if (i >= windowSize) {
			windowSum -= numbers[i - windowSize];
		}

		if (i >= windowSize - 1) {
			result.push(windowSum / windowSize);
		}
	}

	return result;
}
