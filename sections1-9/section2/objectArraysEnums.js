"use strict";
// const person: {
//     name: string,
//     age: number
// } = {
//     name: 'Walnuts',
//     age: 37
// }
// let typescript infer
// const person = {
//     name: 'Wally-Wallnuts',
//     age: 37,
//     hobbies: ['Sports', 'Sex']
// }
// typescript cannot infer a tuple so we 
//  need to explicitly define it
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];     // Tuple 
// } = {
//     name: 'Wally',
//     age: 37,
//     hobbies: ['Sports', 'Sex'],
//     role: [2, 'Author'] 
// }
// // person.role.push('admin')    TS cannot catch this on typescript
// // person.role[1] = "10"        TS cannot catch this on typescript
// console.log(person.name)
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Wallnuts',
    age: 37,
    hobbies: ['Drinking', 'Eating', 'Sports'],
    role: Role.AUTHOR
};
// avoid this, takes type system away
let anyArray;
//# sourceMappingURL=objectArraysEnums.js.map