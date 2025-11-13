// Primitive Types & Reference Types in JavaScript

/*
Primitive Types
The in-memory value of a primitive type is it's actual value (e.g. boolean true, number 42). A primitive type can be stored in the fixed amount of memory available.

String, Number, Boolean, Undefined, Null, Symbol, BigInt

They are called primitives because they hold a single, immutable value (cannot be changed directly once created).

When you assign a primitive variable,
JavaScript makes a copy of the value — not a link to the same memory.

*/
//“Primitive types are copied by value — each variable gets its own copy of the data.”
let a = 10;
let b = a; // b gets copy of a s value
console.log(a);
console.log(b);



/*
Reference Types
A reference type can contain other values. Since the contents of a reference type can not fit in the fixed amount of memory available for a variable, the in-memory value of a reference type is the reference itself (a memory address).

Array
Object
Function
Because objects (and arrays, functions) are non-primitive → they are stored by reference.


*/