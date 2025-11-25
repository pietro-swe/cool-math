/**
 * Computes the arithmetic mean (average) of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 */
export function mean(numbers) {
	if (!numbers.length) return 0;

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum / numbers.length;
}
