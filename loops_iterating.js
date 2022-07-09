// fibonacci.js
function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}
/*
console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765
*/


// Exercise 1
/* Code from Input/Output chapter
let age = prompt("What is your age? ");
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${Number(age) + 10} years old.`);
console.log(`In 20 years, you will be ${Number(age) + 20} years old.`);
console.log(`In 30 years, you will be ${Number(age) + 30} years old.`);
console.log(`In 40 years, you will be ${Number(age) + 40} years old.`);
*/
/*
let age = prompt("What is your age? ");
let yearsToAdd = [10, 20, 30, 40];

for (let index = 0; index < yearsToAdd.length; index += 1) {
  let newAge = Number(age) + Number(yearsToAdd[index]);
  console.log(`In ${yearsToAdd[index]} years, you will be ${newAge} years old.`)
}
*/
// Prompt: 23
// In 10 years, you will be 33 years old.
// In 20 years, you will be 43 years old.
// In 30 years, you will be 53 years old.
// In 40 years, you will be 63 years old.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
function forLoopFactorial (x) {
  let newX = 1;
  for (let counter = x; counter > 0; counter -= 1) {
    newX *= counter;
  }
  return newX;
}
console.log(forLoopFactorial(1)); //1
console.log(forLoopFactorial(4)); //24
console.log(forLoopFactorial(7)); //5040
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
/*
The problem is with the (counter = 1) part of the code. This is not the correct way to write a contisional statement. This part continuously sets the counter equal to 1, so it is always true and therefore the code runs constantly. Then, when the counter is incrememnted in line 5, the counter is always equal to 2. The break never happens because the conditional statement means the counter must be greater than two. The code runs again, and the counter is reset to 1, then incremented to 2, and so on...
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
/*
This output does not produce an error because i is incremented within the body, not in the parenthesis of the for loop. It outputs 1, 2, 3, 4, 5. 
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
function factorial (n) { 
  if (n === 1) return n;
  return n * factorial(n-1);
}
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(7)); //5040
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~