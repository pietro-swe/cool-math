/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return a - b;
}

export const sub = subtract;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @throws {Error} When b is zero
 * @returns {number}
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

/**
 * @param {number[]} numbers
 * @param {boolean} [isSample=true] - If true, uses sample standard deviation (n-1), otherwise population (n). Defaults to true.
 * @returns {number}
 */
export function stdDev(
	numbers,
	isSample = true,
) {
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
