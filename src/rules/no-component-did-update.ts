module.exports = {
	meta: {
		type: "suggestion",
		docs: {
			description: "componentDidUpdate is anti-pattern with redux",
			category: "Possible Errors",
			recommended: true
		}
	},
	create: (context: any) => {
		return {
			MethodDefinition(node: any) {
				if (node && node.key && node.key.name === 'componentDidUpdate') {
					context.report({
						node,
						message: '\'componentDidUpdate\' is anti-pattern while using redux. Update the component to implement this logic inside saga/callback/selector instead.'
					});
				}
			}
		};
	}
};
