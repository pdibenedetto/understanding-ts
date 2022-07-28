type User = { name: string; age: number };
const user1: User = { name: 'Walnuts', age: 39 }

function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
}

// Simplifies to this

// type User = { name: string; age: number };
function greetSimple(user: User) {
    console.log('Hi, I am: ' + user.name)
}

function isOlderSimple(user: User, checkAge: number) {
    return checkAge > user.age;
}

type UserTest = { name: string } | string;
let u1: UserTest = { name: 'Max' }
u1 = 'Mike';