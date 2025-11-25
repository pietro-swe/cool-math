/**
 * Performs linear interpolation between `a` and `b` using factor `t`.
 *
 * t = 0  → returns a
 *
 * t = 1  → returns b
 *
 * @param {number} a
 * @param {number} b
 * @param {number} t - interpolation factor (usually 0..1)
 * @returns {number}
 */
export function lerp(a, b, t) {
	return a + (b - a) * t;
}
