const path = require ('path');

const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},

	devServer: {
		open: true
	},

	resolve: {
    extensions: ['.js', '.jsx'],
  },

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'sass-loader']
			},
			{
				test: /\.jpj|png|gif|webp|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 9000,
					}
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	]
}