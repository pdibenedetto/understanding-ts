"use strict";
const user1 = { name: 'Walnuts', age: 39 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
// Simplifies to this
// type User = { name: string; age: number };
function greetSimple(user) {
    console.log('Hi, I am: ' + user.name);
}
function isOlderSimple(user, checkAge) {
    return checkAge > user.age;
}
let u1 = { name: 'Max' };
u1 = 'Mike';
//# sourceMappingURL=typeAliasesAndObjectTypes.js.map