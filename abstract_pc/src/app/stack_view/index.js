class StackView {
	constructor(stack) {
		this.stack = stack;
	}

	getNode() {
		const div = document.createElement('div');
		div.classList.add('stack');
		this.stack.map((elem) => {
			const childNode = document.createElement('p');
			childNode.innerText = `[key: ${elem.key}; value: ${elem.value}]`;

			div.appendChild(childNode);
		})
		console.log(div)
		return div;
	}
}