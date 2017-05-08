import webpack from 'webpack';
import yargs from 'yargs';
import path from 'path';

export const options = yargs
  	.alias('p', 'optimize-minimize')
  	.alias('e', 'example')
  	.argv;

export const jsLoader = 'babel?cacheDirectory';

let resolve = (dir) => {
    return path.join(__dirname, '../', dir)
}

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
			},
			{ test: /\.png$/, loader: "url?limit=8192&name=img/[name].[ext]" }

		]

	},
	
	resolve: {
		alias: {
			'src': resolve('src'),
			'lib': resolve('lib')
		}
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