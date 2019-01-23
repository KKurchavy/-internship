class AddCommand extends AbstractCommand {
	
	run(a, b) {
		return a + b;
	}

}

class MulCommand extends AbstractCommand {
	
	run(a, b) {
		return a * b;
	}

}


class AbstractCommand {

	constructor(type) {
		this.type = type;
	}

	run() {
		throw new Error('not implemented');
	}
}