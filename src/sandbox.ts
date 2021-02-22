// Strict types. Can change value of let, but not the type
// Typescript allows us to type check during development which leads to cleaner code and less errors

const sum = (a: number, b: number): number => {
  let result = a + b;
  return result;
  // console.log(result);
};
sum(2, 5);

// Must be a string
let character = 'jack';
// character = 30;

//\\ Arrays //\\
let arrayNumber = [1, 2, 3, 4, 5];
// arrayNumber.push('ken');
arrayNumber.push(123);

let arrayStrings = ['John', 'Kim', 'Smith'];
// arrayStrings.push(23);
arrayStrings.push('23');
// arrayStrings[3] = 10;
arrayStrings[3] = '10';

let mixedArray = [30, 'Neo', 20, 'Smith'];
mixedArray.push(30);
mixedArray.push('Andy');

//// Objects \\\\
let person = {
  name: 'amitay',
  age: 32,
};
person.name = 'Tom';
// person.name = 50;
// person.age = 'Max'
// once defined an object we can't add new properties to it
// person.address = 'NY';
person = {
  name: 'Dan',
  age: 10,
  // address: 'main',
};
// console.log(person);

//// Explicit type \\\\
let char: string;
let age: number;
let isLoggedIn: boolean;
let ninjas: string[]; // array of strings
ninjas = ['a', 'b', 'c'];
// ninjas = [1, 2, 3];
// ninjas.push('d');
// console.log(ninjas);
let items: string[] = []; // sets an empty array which lets us push something at the beggining
items.push('some string');
// console.log(items);

// union type - a mixed of types
let mixes: (string | number | boolean)[] = [];
mixes.push('hello');
mixes.push(5);
// console.log(mixes);
mixes = [1, 'a', 2, 'b', false, true];
// console.log(mixes);

let anything: string | number;
anything = 30;
anything = 'whatever';
// console.log(anything);
let ninjaOne: object;
ninjaOne = {
  power: 'fly',
  age: 30,
};
// ninjaOne = 'hello';
// ninjaOne = {
//   isNinja: true,
// };
ninjaOne = [1, 2, 3]; // This surprisingly would work because array in a kind of object
// console.log(ninjaOne);

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

// ninjaTwo = {
//   name: 'John',
//   age: 30,
//   beltColour: 'green',
// };

//\\ The Any Type //\\
let ageTest: number = 25;
// ageTest = 'hello there';
ageTest = 23;
// console.log(ageTest);

let arrayType: any[] = []; // an array we can add any type of property to it
let objectType: { name: any; age: any }; // This should be an object with those keys but they can have any value
objectType = { name: 23, age: 'amitay' };
// console.log(objectType);

//\\ Functions //\\
let greetFunc: Function;
greetFunc = () => {
  console.log('hello from greenFunc');
};
// greetFunc();

// greetFunc = 'hello world';

const greet = (a: number, b: number, c?: number | string) => {
  // optional argumant with the '?' after the 'c'
  console.log(a + b);
};
// greet(1, 5);

const personNew = (a: string, b: string | number | boolean, c: number = 10) => {
  // the c has a default parameter so if we don't send it as a paramater it will be 10 by default. Optional argumant should be at the end
  console.log(`my name is ${a}, and last name is: ${b} and I am ${c} years`);
};
// personNew('amitay', 'soffer', 32);
// personNew('amitay', 'soffer');

const functionNoReturn = (a: number, b: number): void => {
  // void represents a complete lack of return value
  const result = a + b;
  console.log(result);
  // return result;
};
// functionNoReturn();
// functionNoReturn(1, 2);

// This function must return a number. Actually, we don't have to put that number at the end becuase it will automataiclaly tell the returned item to be a number but here it's more explicit and organized.
const returnNumber = (a: number, b: number): number => {
  return a + b;
};

let func = returnNumber(3, 5);
// func = 'hello'; // in this case func must be a number because the function above lables it as type number
// console.log(func);
