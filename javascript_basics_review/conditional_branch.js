"use strict";

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}
// => That's correct!
// => You're so smart!

if (year == 2015) {
  console.log( 'You guessed it right!' );
} else {
  console.log( 'How can you be so wrong?' );
}
//=> year が 2015 の場合・・・You guessed it right!
//=> year が 2015 以外の場合・・・How can you be so wrong?

let age = prompt('How old are you?', '');
let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);
//=> age が 17 の場合・・・false
//=> age が 19 の場合・・・true
