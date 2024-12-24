"use strict";

let str = "my" + "string";
console.log(str);  // mystring

let num = 2;
console.log(num += 5);  // 7  (n = n + 5 と同じ)
console.log(num *= 2);  // 14 (n = n * 2 と同じ)

let counter = 2;
counter++;
console.log(counter);  // 3
counter--;
console.log(counter);  // 2
