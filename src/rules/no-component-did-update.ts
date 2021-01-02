module.exports = {
	create: (context: any) => {
		return {
			MethodDefinition(node: any) {
				if (node && node.key && node.key.name === 'componentDidUpdate') {
					context.report({
						node,
						message: 'Dont use component did update'
					});
				}
			},
		};
	}
};
