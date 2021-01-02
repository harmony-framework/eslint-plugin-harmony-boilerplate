module.exports = {
	configs: {
		recommended: {
			plugins: ['harmony-boilerplate'],
			rules: {
				'harmony-boilerplate/no-component-did-update': 'error'
			}
		}
	},
	rules: {
		'no-component-did-update': require('./rules/no-component-did-update')
	}
};
