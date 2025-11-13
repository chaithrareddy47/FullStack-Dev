// Primitive DataTypes

/*
 * Variables hold values, and every value has a specific data type that defines the kind of information it holds.

* Primitive Data Types and Non-Primitive Data Types. 

* 1. Primitive Data Types
    ! Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable.


*/

//   1.Number: holds decimal values
let x = 250;

let y = 2;
console.log("value of x is " + x);
console.log("value of y is " + y);

// 2.Strings : data type in JavaScript represents a sequence of characters

let str = "Hello"
let str1 = " Welcome to my home"
console.log(str + str1);

// 3.undefined: This means that a variable has been declared but has not been assigned a value,

let num;
console.log("value of num is " + num);

//4.Boolean: data type can accept only two values i.e. true and false.

let a = true;
let b = false;
console.log( a);
console.log(b);

// 5.Null : This data type can hold only one possible value that is null.

let arr = null;
console.log(arr);

//6.BigInt: data type can represent numbers greater than 253-1 which helps to perform operations on large numbers. 
let bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum);

/*
 * Non primitive DataType
   1. objects
   2.arrays
   3.Functions
*/
// objects   Everything is an object in javascript.


let person = {
    name: "chai",
    age:27,
};

console.log(person.name);

//arrays
let arrays = [10,20,30,40]

