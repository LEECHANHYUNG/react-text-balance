import { defineConfig } from "tsup";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

async function processCss(css: string) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true,
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  treeshake: true,
  outDir: "dist",
  banner: {
    js: '"use client"; import "./index.css";',
  },
  esbuildPlugins: [vanillaExtractPlugin({ processCss })],
});
