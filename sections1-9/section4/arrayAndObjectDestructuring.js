"use strict";
// Spread Operator
const hobbies = ['Sports', 'Drinking'];
const activeHobbies = ['Hiking'];
// Array destructuring
const [hobby1, hobby2] = hobbies;
// replaces the following
const hobb1 = hobbies[0];
const hobb2 = hobbies[1];
// activeHobbies.push(hobbies) // actually pushes an array inside an array element
// ... Operator
// Pull out a list of individual values from an array
console.log(activeHobbies);
console.log(activeHobbies.length);
activeHobbies.push(...hobbies);
console.log(activeHobbies.length);
console.log(activeHobbies);
const human = {
    firstName: 'Paul',
    age: 38
};
const copiedHuman = human; // not a true copy, just a reference (pointer in mem)
const trueCopiedHuman = Object.assign({}, human);
// Object descructuring 
const { firstName, age } = human;
//# sourceMappingURL=arrayAndObjectDestructuring.js.map