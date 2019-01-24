class Car {
  constructor(wheels, engine) {
    this.wheels = wheels;
    this.engine = engine;
  }

  run() {
    console.log('Car rides');
    this.engine.start();
  }

}
Car.inject = ['wheels','engine'];

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
  }

  start() {
    console.log('brrrrrrrrrrrrrrrr....');
  }

}
Engine.inject = ['piston']

class Piston {
  constructor() {
    this.cylinderCount = 2;
  }
}

class Main {
  constructor(car) {
    this.car = car;
    this.car.run();
  }
}
Main.inject = ['car'];


const container = new Container(new Injector);

container.register('wheels', Wheels);
container.register('engine', Engine);
container.register('car', Car);
container.register('piston', Piston);

container.run(Main);