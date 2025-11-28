/**
 * @type {import('tsup').Options}
 */
export default {
	entry: ["src/**/*.mjs"],
	format: ["esm"],
	bundle: false,
	splitting: true,
	dts: false,
	sourcemap: true,
	outDir: "dist",
	target: "es2023",
	skipNodeModulesBundle: true,
	clean: true,
	minify: true,
	treeshake: true,
};
