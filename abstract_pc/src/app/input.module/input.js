class InputComponent {
	constructor(className) {
		this.root  = this._getElementByClass(className);
	}

	_getElementByClass(className) {
		return document.querySelector(`.${className}`);
	}

	getInputValue() {
		return this.root.value;
	}

	cleanInputField() {
		this.root.value = "";
	}

}