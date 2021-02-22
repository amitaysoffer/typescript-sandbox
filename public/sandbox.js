"use strict";
// Strict types. Can change value of let, but not the type
// Typescript allows us to type check during development which leads to cleaner code and less errors
var sum = function (a, b) {
    var result = a + b;
    return result;
    // console.log(result);
};
sum(2, 5);
// Must be a string
var character = 'jack';
// character = 30;
//\\ Arrays //\\
var arrayNumber = [1, 2, 3, 4, 5];
// arrayNumber.push('ken');
arrayNumber.push(123);
var arrayStrings = ['John', 'Kim', 'Smith'];
// arrayStrings.push(23);
arrayStrings.push('23');
// arrayStrings[3] = 10;
arrayStrings[3] = '10';
var mixedArray = [30, 'Neo', 20, 'Smith'];
mixedArray.push(30);
mixedArray.push('Andy');
//// Objects \\\\
var person = {
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
};
// console.log(person);
//// Explicit type \\\\
var char;
var age;
var isLoggedIn;
var ninjas; // array of strings
ninjas = ['a', 'b', 'c'];
// ninjas = [1, 2, 3];
// ninjas.push('d');
// console.log(ninjas);
var items = []; // sets an empty array which lets us push something at the beggining
items.push('some string');
// console.log(items);
// union type - a mixed of types
var mixes = [];
mixes.push('hello');
mixes.push(5);
// console.log(mixes);
mixes = [1, 'a', 2, 'b', false, true];
// console.log(mixes);
var anything;
anything = 30;
anything = 'whatever';
// console.log(anything);
var ninjaOne;
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
var ninjaTwo;
// ninjaTwo = {
//   name: 'John',
//   age: 30,
//   beltColour: 'green',
// };
//\\ The Any Type //\\
var ageTest = 25;
// ageTest = 'hello there';
ageTest = 23;
// console.log(ageTest);
var arrayType = []; // an array we can add any type of property to it
var objectType; // This should be an object with those keys but they can have any value
objectType = { name: 23, age: 'amitay' };
// console.log(objectType);
//\\ Functions //\\
var greetFunc;
greetFunc = function () {
    console.log('hello from greenFunc');
};
// greetFunc();
// greetFunc = 'hello world';
var greet = function (a, b, c) {
    // optional argumant with the '?' after the 'c'
    console.log(a + b);
};
// greet(1, 5);
var personNew = function (a, b, c) {
    if (c === void 0) { c = 10; }
    // the c has a default parameter so if we don't send it as a paramater it will be 10 by default. Optional argumant should be at the end
    console.log("my name is " + a + ", and last name is: " + b + " and I am " + c + " years");
};
// personNew('amitay', 'soffer', 32);
// personNew('amitay', 'soffer');
var functionNoReturn = function (a, b) {
    // void represents a complete lack of return value
    var result = a + b;
    console.log(result);
    // return result;
};
// functionNoReturn();
// functionNoReturn(1, 2);
// This function must return a number. Actually, we don't have to put that number at the end becuase it will automataiclaly tell the returned item to be a number but here it's more explicit and organized.
var returnNumber = function (a, b) {
    return a + b;
};
var func = returnNumber(3, 5);
// func = 'hello'; // in this case func must be a number because the function above lables it as type number
// console.log(func);
