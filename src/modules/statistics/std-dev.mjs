/**
 * @param {number[]} numbers
 * @param {boolean} [isSample=true] - If true, uses sample standard deviation (n-1), otherwise population (n). Defaults to true.
 * @returns {number}
 */
export function stdDev(numbers, isSample = true) {
	const n = numbers.length;
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return isSample ? 0 : 0;
	}

	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += numbers[i];
	}
	const mean = sum / n;

	let varianceSum = 0;
	for (let i = 0; i < n; i++) {
		const diff = numbers[i] - mean;
		varianceSum += diff * diff;
	}
	const variance = varianceSum / (isSample ? n - 1 : n);

	return Math.sqrt(variance);
}
