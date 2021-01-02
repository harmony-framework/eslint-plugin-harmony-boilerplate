module.exports = {
	configs: {
		recommended: {
			plugins: ['react-redux-recommended'],
			rules: {
				'react-redux-recommended/no-component-did-update': 'error'
			}
		}
	},
	rules: {
		'no-component-did-update': require('./rules/no-component-did-update')
	}
};
