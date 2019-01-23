class Main {
	constructor() {
		this.input = new InputComponent('cmd');
		this.commands = new CommandsFactory();
		this.output = new OutputComponent();
		this.listElement = new SingleOutputComponent();

		this.stackComponent = new StackView(stack.stack)
		this.stackView =  this.stackComponent.getNode();

		document.body.appendChild(this.stackView);
		document.querySelector('.res-list').appendChild(this.output.getComponent());
		this.input.root.addEventListener('keydown', (event) => {
			this.enterHandler(event);
		});
	}

	enterHandler(event) {
		if(event.key === "Enter") {
			const [commandType, ...args] = this.input.getInputValue().split(' ');
			const command = this.commands.getCommand(commandType);
			const res = command.run(...args);

			if(res) {
				this.output.addChild(this.listElement.createComponent('result: ' + res));
			}

			this.updateStackView();
			this.input.cleanInputField();
		}
	}

	updateStackView() {
		//....
	}

}

new Main();