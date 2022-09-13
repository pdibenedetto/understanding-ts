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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Wallnuts',
    age: 37,
    hobbies: ['Drinking', 'Eating', 'Sports'],
    role: Role.AUTHOR
}

// avoid this, takes type system away
let anyArray : any[]