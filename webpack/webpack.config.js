import baseConfig, { options } from './base.config';
import yargs from 'yargs';

let entryObj = {};

// console.log(options)

//options.example && entryObj = { example: './example/js/index.js' } || entryObj = { lm-ui-react: './src/index.js' }

if (options.example) {

    entryObj = { 'example': './example/js/index.js' }

} else {

    entryObj = { 'lm-ui-react': './src/index.js' }

}

export default {
	...baseConfig,

	entry: entryObj,

  	output: {

  		path: options.example ? '/': './dist',
        //path: './dist',
  		filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
  		library: 'LmUiReact',
  		libraryTarget: 'umd'

  	},

    // externals: [

    //     {
    //         react: {
    //             root: 'React',
    //             commonjs2: 'react',
    //             commonjs: 'react',
    //             amd: 'react',
    //         },
    //     },

    //     {

    //         'react-dom': {
    //             root: 'ReactDOM',
    //             commonjs2: 'react-dom',
    //             commonjs: 'react-dom',
    //             amd: 'react-dom',
    //         }
    //     }
    // ],

}