<<<<<<< HEAD
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
||||||| first commit
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
=======
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
>>>>>>> master

export default [
<<<<<<< HEAD
  {
    input: "src/index.js",
    output: {
      name: "index",
      file: pkg.main,
      format: "umd"
||||||| first commit
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      name: "formatted-input",
      file: pkg.browser,
      format: "umd"
=======
    {
        input: 'src/index.js',
        output: {
            name: 'index',
            file: pkg.main,
            format: 'umd'
        },
        plugins: [
            resolve(),
            babel({ 
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react']
            }),   
            commonjs(),
            // rollupNodeResolve(), rollupBabel(), rollupCommonJS()
        ],
        external: [
            'react',
            'prop-types',
        ],
        globals: {
            react: "React"
        }
>>>>>>> master
    },
<<<<<<< HEAD
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"]
      }),
      commonjs()
    ],
    external: ["react", "prop-types"],
    globals: {
      react: "React"
    }
  }
];
||||||| first commit
    plugins: [resolve(), commonjs()]
  },
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [resolve(), commonjs()]
  }
];
=======
];
>>>>>>> master
