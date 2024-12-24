console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true

let a = 1
let b = 2
console.log(a ?? b)


let user;
console.log(user);                 // undefined
console.log(user ?? "Anonymous");  // Anonymous

user = user ?? "Anonymous"
console.log(user)                  // Anonymous
