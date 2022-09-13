"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user;
user = new Person('Paul', 38);
// user = {
//   name: "Paul",
//   age: 38,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };
user.greet('Hi there, I am');
//# sourceMappingURL=app.js.map