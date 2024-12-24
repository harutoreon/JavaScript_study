"use strict";

let value = true;
console.log(typeof value);  // boolean

value = String(value);
console.log(typeof value);  // string

let str = "123";
console.log(typeof str);  // string

let num = Number(str);
console.log(typeof num);  // number

console.log( Boolean(1) );        // true
console.log( Boolean(0) );        // false
console.log( Boolean("hello") );  // true
console.log( Boolean("") );       // false