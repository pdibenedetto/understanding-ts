type AddFn = (a: number, b: number) => number;

let addFunVar: AddFn;

addFunVar = (n1: number, n2: number) => {
    return n1 + n2;
}


interface AddFunInterface {
    (a: number, b: number): number; // anonomous function
}

let addFunInterfaceVar: AddFunInterface;
addFunInterfaceVar = (n1: number, n2: number) => {
    return n1 + n2
}

// custom Type in this example is usually what's more practiced and used out there. 
// a little shorter as well.