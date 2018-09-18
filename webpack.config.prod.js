import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
				vendor: path.resolve(__dirname, 'src/vendor'),
				main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [

			// Hash the files using MD5 so that their names changes when the content changes.
			new WebpackMd5Hash(),

			//use commonsCHunkPlugin to create a seperate bundle
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			//create html file that include referece to bundle.js
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				inject: true
			}),

			//Eleminate duplicate packages when generating bundle.
			new webpack.optimize.DedupePlugin(),

			//Minify JS
			new webpack.optimize.UglifyJsPlugin()
		],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders:['style', 'css']}
    ]
  }
}
