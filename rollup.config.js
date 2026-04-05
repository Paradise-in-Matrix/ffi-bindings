import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

    export default {
        input: "src/index.web.js",
        output: {
            file: "dist/index.esm.js",
            format: "es"
        },
        external: [/\.wasm$/],
        plugins: [
            resolve({
                browser: true
            }),
            commonjs({
                transformMixedEsModules: true
            })
        ]
    };
