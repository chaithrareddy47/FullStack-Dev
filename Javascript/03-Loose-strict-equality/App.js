// == and === vs typeof operator
//  JavaScript includes both strict (===) and loose (==) equality operators, which behave differently when comparing values.

// == (Loose Equality): This operator performs type coercion before comparing two values.

//=== (Strict Equality): This operator compares both the value and the type without any type coercion.

//typeof Operator: The typeof operator is used to check the data type of a variable.

console.log(5 === 5);
console.log('hello world' === 'hello world');

// strick compare with num and string
console.log(7 === '7');
// JavaScript ALWAYS converts the string → number before comparing.
console.log(7 == '7');

// it never converts number to a string
// it always converts string to a number no matter the order



