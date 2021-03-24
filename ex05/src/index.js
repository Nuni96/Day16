class Microsoft {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  occupation() {
    return `${this._name} is a philanthropist!`;
  }
}

class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this._age = age;
  }

  studentAge() {
    return `${this._name} is ${this._age}`;
  }
}

let henry = new Microsoft("William Henry Gates III");
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(henry.occupation());
console.log(elliot.occupation());
console.log(elliot.studentAge());
module.exports = {
  Microsoft,
  Facebook,
};
