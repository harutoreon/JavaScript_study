// while ループ
let i = 0;

while (i < 3) {
  console.log( i );
  i++;
}

// do ... while ループ
let j = 0;

do {
  console.log( j );
  j++;
} while (j < 3);

// for ループ
for (let i = 0; i < 3; i++) {
  console.log( i );
}

// break
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break;
  sum += value;
}
console.log( 'Sum: ' + sum );

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  console.log( i );
}
