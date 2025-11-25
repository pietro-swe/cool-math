/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function summation(numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
