// const promise: Promise<string> = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// });

// promise.then(date =>  {
//     // data gets the type of the generic specified above
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Paul" }, { age: 38 });
console.log(mergedObj);

// Now you can access the properties on the mergedObj

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

console.log(countAndDescribe(["Sports", "Cooking"]));

// function extractAndConvert(obj: object, key: string) {
//     return 'Value: ' + obj[key];
// }

// app.ts:42:24 - error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
//   No index signature with a parameter of type 'string' was found on type '{}'.

// 42     return 'Value: ' + obj[key];

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// extractAndConvert({}, 'name');

// app.ts:54:23 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'never'.

// 54 extractAndConvert({}, 'name');

extractAndConvert({ name: "Paul" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  // JavaScript - system by reference , fix for objects
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Paul");
textStorage.addItem("John");
console.log(textStorage.getItems());
textStorage.removeItem("Paul");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Paul'});
// objStorage.addItem({name: 'John'});
// console.log(objStorage.getItems());
// objStorage.removeItem({name: 'Paul'});
// console.log(objStorage.getItems());

// const objFixStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Paul'});
// objStorage.addItem({name: 'John'});
// console.log(objStorage.getItems());
// objStorage.removeItem({name: 'Paul'});
// console.log(objStorage.getItems());

// Lecture 101: Generic Utility Types

interface CourseGoal {
  title: String;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
    // return {title: title, description: description, completeUntil: date};
    // or
    // let courseGoal = {};             // This works in vanilla javascript but complains in ts
    // courseGoal.title = title;
    // courseGoal.description = description;
    // courseGoal.completeUntil = date;

    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string []> = ['Paul', 'Johanna'];
names.push('Max');
names.pop();
