class Injector {
	constructor() {
		this.stack = new Map();
	}

	register(name, ObjConstructor) {
		if(typeof ObjConstructor !== 'function') {
			throw new Error(`${name} is not a function`);
		}

		this.stack.set(name, ObjConstructor);
	}

	get(name) {
		const ObjConstructor = this.stack.get(name);
		const obj = new ObjConstructor();

		if(obj.inject) {
			const deps = [];

			obj.inject.map((dep) => {

				if(!this.stack.get(dep)){
					throw new Error('no dependency object');
				}

				deps.push(this.get(dep));
			});
			
			return new ObjConstructor(...deps);

		} else {
			return new ObjConstructor();
		}

	}
}