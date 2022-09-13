
type GreetableType = {
    readonly name: string;   
  
    greet(phrase: string): void;
}
interface Named {
    readonly name: string
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {

    constructor(public name: string, public age: number){}

    greet(phrase: string): void {
        console.log(phrase + " " + this.name);
    }
}

let user: Greetable;

user = new Person('Paul', 38)

// user = {
//   name: "Paul",
//   age: 38,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };

user.greet('Hi there, I am')

