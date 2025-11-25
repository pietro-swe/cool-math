/**
 * Computes the range (max - min) of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 */
export function range(numbers) {
	const n = numbers.length;
	if (n === 0) return 0;

	let min = numbers[0];
	let max = numbers[0];

	for (let i = 1; i < n; i++) {
		const v = numbers[i];
		if (v < min) min = v;
		if (v > max) max = v;
	}

	return max - min;
}
