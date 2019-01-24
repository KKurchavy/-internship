class Car {
	constructor(wheels, engine) {
		this.wheels = wheels;
		this.engine = engine;
		this.inject = ['wheels', 'engine'];
	}

	run() {
		console.log('Car is rides');
		this.engine.start();
	}
}

class Wheels {
	constructor() {
		this.count = 4;
		this.radius = 25;
	}
}



class Engine {
	constructor(piston) {
		this.piston = piston;
		this.horsepower = 0.7;
		this.type = 'internal combustion';
		this.inject = ['piston'];
	}

	start() {
		console.log('brrrrrrrrrrrrrrrr....');
	}
}

class Piston {
	constructor() {
		this.cylinderCount = 2;
	}
}

const injector = new Injector();

injector.register('wheels', Wheels);
injector.register('engine', Engine);
injector.register('car', Car);
injector.register('piston', Piston);

const car = injector.get('car');