class CommandsFactory {
	constructor() {
		this.commands = new Map([
			['add', new AddCommand()],
			['mul', new MulCommand()],
			['var', new WdCommand()]
		]);
	}

	getCommand(type) {
		return this.commands.get(type);
	}

}








const stack = new Memory();

class AbstractCommand {

	run() {
		throw new Error('not implemented');
	}

}

class AddCommand extends AbstractCommand {
	
	run(a, b) {
		return stack.getValue(a) + stack.getValue(b);
	}

}

class MulCommand extends AbstractCommand {
	
	run(a, b) {
		return stack.getValue(a) * stack.getValue(b);
	}

}

class WdCommand extends AbstractCommand {
	
	run(a, b) {
		stack.addElement(a, +b);
	}

}