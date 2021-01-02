module.exports = {
	create: (context: any) => {
		return {
			MethodDefinition(node: any) {
				if (node && node.key && node.key.name === 'componentDidUpdate') {
					context.report({
						node,
						message: '\'componentDidUpdate\' is unsafe for use. Update the component to use this logic inside saga/callback/selector instead.'
					});
				}
			},
		};
	}
};
