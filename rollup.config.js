import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import reactSvg from "rollup-plugin-react-svg";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    external: [
      "react",
      "styled-components",
      "prop-types",
      "prism-react-renderer",
      "prism-react-renderer/themes/nightOwl",
      "react-copy-to-clipboard",
      "react-live",
    ],
    output: {
      name: "formidableOSSLanders",
      file: pkg.browser,
      format: "umd",
      globals: {
        react: "React",
        "styled-components": "styled",
        "prop-types": "PropTypes",
        "react-copy-to-clipboard": "reactCopyToClipboard",
        "react-live": "reactLive",
        "prism-react-renderer/themes/nightOwl": "nightOwl",
      },
    },
    plugins: [
      nodeResolve({ extensions: [".jsx", ".js"] }),
      commonjs(), // necessary to convert dependencies to ES modules
      babel({
        extensions: [".jsx", ".js"],
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      reactSvg({
        exclue: "node_modules/**",
      }),
    ],
  },
];
