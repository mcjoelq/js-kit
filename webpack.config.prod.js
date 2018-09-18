import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

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
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
