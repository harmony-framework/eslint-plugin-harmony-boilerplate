const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const lintConfigProduction = {
	context: './src',
	extensions: ['ts'],
	emitWarning: true,
	emitError: true
};

const lintConfigDevelopment = {
	context: './src',
	extensions: ['ts'],
	exclude: ['public', 'node_modules', 'base/extends'],
	failOnError: false,
	failOnWarning: false,
	emitWarning: true
}

module.exports = {
	entry: './src/index.ts',
	plugins: [
		{
			resolve: '@poi/plugin-typescript',
			options: {}
		}
	],
	configureWebpack: {
		resolve: {
			plugins: [
				new TsconfigPathsPlugin({})
			]
		},
		plugins: [
			new ESLintPlugin(isProduction ? lintConfigProduction : lintConfigDevelopment)
		]
	},
};
