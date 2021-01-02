module.exports = {
	create: (context: any) => {
		return {
			MethodDefinition(node: any) {
				if (node && node.key && node.key.name === 'componentDidUpdate') {
					context.report({
						node,
						message: '\'componentDidUpdate\' is ant-pattern while using redux. Update the component to implement this logic inside saga/callback/selector instead.'
					});
				}
			},
		};
	}
};
