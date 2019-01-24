class Injector {
  constructor() {
    this.map = new Map();
  }

  register(token, clazz) {
    if (typeof clazz !== 'function') {
      throw new Error('Is not a function');
    }

    this.map.set(token, clazz);
  }

  delete(token) {
    this.map.delete(token);
  }

  get(token) {
    if (!this.map.get(token)) {
      throw new Error('no dependency instanceect');
    }

    const clazz = this.map.get(token);
    
    if (clazz.inject) {
      const deps = [];

      clazz.inject.map((dep) => {
        deps.push(this.get(dep));
      });

      return new clazz(...deps);

    } else {
      return new clazz();
    }

  }
}

class Container {
  constructor(injector) {
    this.injector = injector;
  }

  register(token, clazz) {
    this.injector.register(token, clazz);
  }

  get(token) {
    this.injector.get(token);
  }

  _delete(token) {
    this.injector.delete(token);
  }

  run(clazz) {
    const token = 'temporary token';

    this.register(token, clazz);
    this.get(token);
    this._delete(token)
  }
}