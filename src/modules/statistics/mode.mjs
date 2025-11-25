/**
 * Computes the mode (most frequent value) of an array.
 * Returns null if all values appear with equal frequency.
 *
 * @param {number[]} numbers
 * @returns {number | null}
 */
export function mode(numbers) {
	if (numbers.length === 0) return null;

	const freq = new Map();

	for (let i = 0; i < numbers.length; i++) {
		const n = numbers[i];
		freq.set(n, (freq.get(n) || 0) + 1);
	}

	let maxCount = 0;
	let modeValue = null;
	let isTie = false;

	for (const [value, count] of freq.entries()) {
		if (count > maxCount) {
			maxCount = count;
			modeValue = value;
			isTie = false;
		} else if (count === maxCount) {
			isTie = true;
		}
	}

	return isTie ? null : modeValue;
}
