class Injector {
  constructor() {
    this.map = new Map();
  }

  register(token, clazz) {
    if (typeof clazz !== 'function') {
      throw new Error(`${clazz} is not a function`);
    }

    this.map.set(token, clazz);
  }

  delete(token) {
    this.map.delete(token);
  }

  get(token) {
    if (!this.map.get(token)) {
      throw new Error(`There is no provider for ${token}`);
    }

    const clazz = this.map.get(token);
    
    if (!clazz.inject) {
      return new clazz();
    }

    const deps = clazz.inject.map((dep) => {
      return this.get(dep);
    });

    return new clazz(...deps);

  }
}

class Container {
  constructor() {
    this.injector = new Injector();
  }

  register(token, clazz) {
    this.injector.register(token, clazz);
  }

  get(token) {
    return this.injector.get(token);
  }

  run(token) {
    const instance = this.get(token);
    
    instance.execute();
  }
}