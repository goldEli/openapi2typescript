import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
export default {
    input: "./node_modules/clipboardy/index.js",
    output: [
        // 1. cjs -> commonjs
        // 2. esm
        {
            format: "cjs",
            file: "src/lib/clipboardy.cjs.js",
        },
        // {
        //     format: "es",
        //     file: "lib/clipboardy.esm.js",
        // },
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        nodeResolve()
    ],

    //   plugins: [typescript()],
};