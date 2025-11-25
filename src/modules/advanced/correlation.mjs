import { covariance } from "./covariance.mjs";

/**
 * Computes the Pearson correlation coefficient between two datasets.
 *
 * `r = covariance(x, y) / (std(x) * std(y))`
 *
 * @param {number[]} xs
 * @param {number[]} ys
 * @returns {number}
 */
export function correlation(xs, ys) {
	const n = xs.length;

	if (n === 0 || ys.length !== n) {
		return 0;
	}

	let meanX = 0;
	let meanY = 0;

	for (let i = 0; i < n; i++) {
		meanX += xs[i];
		meanY += ys[i];
	}

	meanX /= n;
	meanY /= n;

	let sumX = 0;
	let sumY = 0;

	for (let i = 0; i < n; i++) {
		const dx = xs[i] - meanX;
		const dy = ys[i] - meanY;

		sumX += dx * dx;
		sumY += dy * dy;
	}

	const stdX = Math.sqrt(sumX / (n - 1));
	const stdY = Math.sqrt(sumY / (n - 1));

	if (stdX === 0 || stdY === 0) return 0;

	return covariance(xs, ys) / (stdX * stdY);
}
