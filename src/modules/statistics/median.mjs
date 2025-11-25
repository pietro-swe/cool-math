/**
 * Computes the median of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 */
export function median(numbers) {
	const n = numbers.length;
	if (n === 0) return 0;

	const sorted = numbers.toSorted((a, b) => a - b);

	const mid = Math.floor(n / 2);

	if (n % 2 === 0) {
		return (sorted[mid - 1] + sorted[mid]) / 2;
	}

	return sorted[mid];
}
