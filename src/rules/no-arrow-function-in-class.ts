module.exports = {
	meta: {
		type: "suggestion",
		docs: {
			description: "method instead arrow function",
			category: "Possible Errors",
			recommended: true,
			url: "https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1"
		}
	},
	create: (context: any) => {
		return {
			ArrowFunctionExpression(node: any) {
				if (node.parent.type === 'ClassProperty' && node.type === 'ArrowFunctionExpression') {
					context.report({
						node,
						message: 'Do not use arrow function instead method of class'
					});
				}
			}
		};
	}
};
