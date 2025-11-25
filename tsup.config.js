/**
 * @type {import('tsup').Options}
 */
export default {
	entry: ["src/index.mjs"],
	format: ["esm"],
	splitting: false,
	dts: true,
	sourcemap: true,
	outDir: "dist",
	skipNodeModulesBundle: true,
	clean: true,
	minify: true,
	treeshake: true,
};
