import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const instrument = {
  input: "src/instrument.ts",
  output: {
    file: "dist/instrument.mjs",
    format: "es",
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript()],
};

export default [instrument];
