/**
 * Computes the covariance between two datasets.
 * Both arrays must have the same length.
 *
 * @param {number[]} xs
 * @param {number[]} ys
 * @param {boolean} [isSample=true] - sample or population covariance. Defaults to true.
 * @returns {number}
 */
export function covariance(xs, ys, isSample = true) {
	const n = xs.length;

	if (n === 0 || ys.length !== n) return 0;
	if (n === 1) return 0;

	let meanX = 0;
	let meanY = 0;

	for (let i = 0; i < n; i++) {
		meanX += xs[i];
		meanY += ys[i];
	}

	meanX /= n;
	meanY /= n;

	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += (xs[i] - meanX) * (ys[i] - meanY);
	}

	return sum / (isSample ? n - 1 : n);
}
