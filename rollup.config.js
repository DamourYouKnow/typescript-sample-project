import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import {uglify} from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default function(config) {
    const prod = config.prod ? true : false;
    console.log(`Building ${prod ? 'prod' : 'dev'}`);

    return {
        input: './src/client/app.ts',
        external: [],
        sourcemap: prod ? undefined : 'inline',
        plugins: [
            resolve({extensions}),
            //commonjs(),
            typescript({
                tsconfigDefaults: {
                    sourceMap: prod ? false : true
                }
            }),
            babel({
                extensions: extensions,
                include: ['src/client/*'],            
            }),
            uglify()
        ],
        output: {
            input: 'src/client/app.ts',
            file: 'public/scripts/app.js',
            format: 'iife'
        },
    }
};