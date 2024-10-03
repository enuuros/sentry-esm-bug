import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const instrument = {
  input: "src/instrument.ts",
  output: {
    file: "dist/instrument.mjs",
    format: "es",
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript(), commonjs(), json()],
};

export default [instrument];
