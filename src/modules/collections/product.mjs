/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function product(numbers) {
	let result = 1;
	for (let i = 0; i < numbers.length; i++) {
		result *= numbers[i];
	}
	return result;
}
