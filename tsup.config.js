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
	target: "es2023",
	skipNodeModulesBundle: true,
	clean: true,
	minify: true,
	treeshake: true,
};
