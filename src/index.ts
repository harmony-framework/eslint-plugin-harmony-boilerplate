module.exports = {
	configs: {
		recommended: {
			plugins: ['harmony-boilerplate'],
			rules: {
				'harmony-boilerplate/no-component-did-update': 'error',
				'harmony-boilerplate/no-arrow-function-in-class': 'error'
			}
		}
	},
	rules: {
		'no-component-did-update': require('./rules/no-component-did-update'),
		'no-arrow-function-in-class': require('./rules/no-arrow-function-in-class'),
	}
};
