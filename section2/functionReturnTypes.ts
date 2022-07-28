
// Let typescript infer the return type - best practice
function add(n1: number, n2: number): number {
    return n1 + n2;
}


// Void - technically returns undefined which is a legitimate type
function printResult(num: number): void {
    console.log('Result: ' + num)
}

// Void - technically returns undefined which is a legitimate type
// Never use this, although it compiles
function printResult1(num: number): undefined {
    console.log('Result: ' + num)
    return
}


let combineValues;      // Infered type is let combineValues: any
// 
//
combineValues = add;    //
// so you could do this
// combineValues = 5

console.log(combineValues(8, 8));

let combineValuesFunction: Function

combineValuesFunction = add

combineValuesFunction = printResult // Typescript can't catch this.


let combineValuesFunctionExplicit: (a: number, b: number) => number

combineValuesFunctionExplicit = add;

// combineValuesFunctionExplicit = printResult;    // Compile will catch this as an error because of the signature of the function

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    return callback(result)
    // the void explicitly says the callback is not interested in any returned type, so even if something is returned, it won't use it
}

addAndHandle(10, 20, (result) => {
    console.log(result)
    return true
})