class OutputComponent {
	constructor() {
		this.root = this._createComponent();
	}

	_createComponent() {
		const component =  document.createElement('ul');

		return component;
	}

	addChild(childNode) {
		this.root.appendChild(childNode);
	}

	getComponent() {
		return this.root;
	}
}