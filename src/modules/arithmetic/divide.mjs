import { DivideByZeroError } from "../../errors/DivideByZeroError.mjs";

/**
 * @param {number} a
 * @param {number} b
 * @throws {DivideByZeroError} When b is zero
 * @returns {number}
 */
export function divide(a, b) {
	if (b === 0) {
		throw new DivideByZeroError();
	}

	return a / b;
}
