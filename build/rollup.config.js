import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from '../package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

const cwd = process.cwd();

export default [
  {
    input: `${cwd}/src/observer/index.js`,
    external: ['lodash-es'], // 排除第三方包
    output: {
      name: 'index',
      format: 'umd',
      file: 'dist/lib/browser/observer/index.umd.js',
    },
    plugins: [resolve(), commonjs(), terser()],
  },
  /*{
    input: `${cwd}/src/main.js`,
    external: ['ms'], // 排除第三方包
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [terser()]
  }*/
];
