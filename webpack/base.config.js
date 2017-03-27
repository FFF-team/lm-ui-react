import webpack from 'webpack';
import yargs from 'yargs';

export const options = yargs
  	.alias('p', 'optimize-minimize')
  	.alias('e', 'example')
  	.argv;

export const jsLoader = 'babel?cacheDirectory';

const baseConfig = {

	entry: undefined,

	output: undefined,

	externals: undefined,

	module: {

		loaders: [

			{ 
				test: /\.js/, 
				loader: jsLoader, 
				exclude: /node_modules/

			},
			{ 
				test: /\.scss$/, 
				loader: "style!css!autoprefixer-loader!sass" 
			}

		]

	},

	plugins: [

		new webpack.DefinePlugin({
			//yargs识别命令行中的参数->根据yargs的参数来设置这个全局变量的值
			'process.env': {

				NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')

			}

		})

	]

}

if (!options.optimizeMinimize) {

	baseConfig.devtool = 'source-map';

}
export default baseConfig;