class Pets {
  constructor(name, legs) {
    this._name = name;
    this._legs = legs;
  }
  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }
  walk() {
    var numberOfLegs = `${this._name} is walking on ${this._legs} legs`;
    return numberOfLegs;
  }
}

class Dog extends Pets {
  constructor(name, legs) {
    super(name, legs);
  }
  bark() {
    var dogSay = `${this._name} says WUF-WUF`;
    return dogSay;
  }
  set name(newName) {
    this._name = newName;
  }

  set legs(newLegs) {
    this._legs = newLegs;
  }
  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }
}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
