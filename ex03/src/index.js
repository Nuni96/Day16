class Person {
  static display() {
    let message = console.log("Static method is invoked from Person class");
    return message;
  }

  show() {
    Person.display();
  }
}

var message = new Person();
message.show();
module.exports = Person;
