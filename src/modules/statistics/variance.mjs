import { mean } from "./mean.mjs";

/**
 * Computes the variance of a list of numbers.
 * @param {number[]} numbers
 * @param {boolean} [isSample=true] - If true, uses sample variance (n-1). Otherwise population variance (n). Defaults to true.
 * @returns {number}
 */
export function variance(numbers, isSample = true) {
	const n = numbers.length;
	if (n === 0) return 0;
	if (n === 1) return isSample ? 0 : 0;

	const avg = mean(numbers);

	let sumSq = 0;
	for (let i = 0; i < n; i++) {
		const diff = numbers[i] - avg;
		sumSq += diff * diff;
	}

	return sumSq / (isSample ? n - 1 : n);
}
