type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name : string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee = {
    name: 'Paul',
    priviliges: ['aws-ec2'],
    startDate: new Date()
};

type Combinable1 = string | number;
type Numeric = number | boolean;

type Universal = Combinable1 & Numeric;

// Function overload
function add1(a: string, b: string): string
function add1(a: number, b: number): number
function add1(a: Combinable1, b: Combinable1) {
    if(typeof a ==='string' || typeof b === 'string'){      // type guard example        
        return a.toString() + b.toString();
    }
    return a + b;
}

// Function overloads helps infer the type returned by the method
const result = add1('Paul', ' DiBenedetto')
result.split(' ')


// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Paul',
    job: {title: 'CEO', description: 'My own company'}
}

// Vanilla javascript checking
// console.log(fetchedUserData.job && fetchedUserData.job.title)

console.log(fetchedUserData?.job?.title)

// Nullish data - Nullish Coalescing

// const uInput = '';
// const storedData = userInput || 'Default';
// console.log(storedData); // this will go to the 'Default'

const uInput = '';
const storedData = userInput ?? 'Default';
console.log(storedData); 






// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp){
//         console.log('Privileges : ' + emp.privileges)
//     }
// }

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird' :
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse' :
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10})

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// // or
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement

// userInputElement.value = 'Hi';

// // a flexible error container for form validation
// interface ErrorContainer  {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a valid capital character!'
// }