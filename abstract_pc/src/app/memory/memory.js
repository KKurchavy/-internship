class Memory {
	constructor() {
		this.stack = this._createStack();
	}

	_createStack() {
		return new Array();
	}

	addElement(key, value) {
		this.stack.push({key, value})
	}

	getValue(key) {
		const index = this.stack.findIndex((elem) => {
			return elem.key === key;
		});

		return this.stack[index].value;
	}
}