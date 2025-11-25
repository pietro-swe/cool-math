import { DivideByZeroError } from "../../errors/DivideByZeroError.mjs";

/**
 * Safely divides two numbers.
 *
 * Behavior:
 * - If divisor is 0:
 *    - returns the fallback (default: null)
 *    - OR throws a DivideByZeroError if throwOnZero is true
 *
 * @param {number} a
 * @param {number} b
 * @param {{ fallback?: number | null, throwOnZero?: boolean }} [options]
 * @returns {number | null}
 */
export function safeDivide(a, b, options = {}) {
	const { fallback = null, throwOnZero = false } = options;

	if (b === 0) {
		if (throwOnZero) {
			throw new DivideByZeroError();
		}
		return fallback;
	}

	return a / b;
}
