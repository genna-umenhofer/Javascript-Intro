// Exercise 1
let firstName = "John";
let lastName = "Doe";

console.log(`My name is ${firstName} ${lastName}.`)
// My name is John Doe.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
let startingNum = 4936;
let onesPlace = startingNum % 10;

startingNum = (startingNum - onesPlace) / 10;
let tensPlace = startingNum % 10;

startingNum = (startingNum - tensPlace) / 10;
let hundsPlace = startingNum % 10;

startingNum = (startingNum - hundsPlace) / 10;
let thousPlace = startingNum % 10;

console.log(`The ones place is ${onesPlace}. The tens place is ${tensPlace}. The hundreds place is ${hundsPlace}. The thousands place is ${thousPlace}.`);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
/*
'True' is a string.
False is a boolean.
1.5 is a number.
2 is a number.
Undefined is undefined.
{ foo: 'bar' } is an object.
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
/* This code logs '510' instead of 15 becuase Js is performing string concantenation instead of arithmetic operations. Because '5' is a String instead of a Number, JS is assuming that the output should implicitly convert the 10 to a String and then perform the concantenation. If a user wanted to get to a 15, then the String '5' would first have to be explicitly converted into a Number type. 
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
console.log(5 + 10);
// 15
console.log(Number('5') + 10);
// 15
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
// The value of 5 + 10 is 15.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 7
/*
This code won't necessarily return an "error" per se, but it will return 'undefined' since the array is shorter than [3] due to zero-indexing. Based on the context of the code, I don't think that the intention is to have 'undefined' returned, so this could lead to errors later on in the program if foo[3] was actually supposed to return a Number. 
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 8
let names = ['asta', 'butterscotch', 'pudding', 'neptune','darwin'];
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 9
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 10 
/*
This expression evaluates to false because on has a capital letter and the other does not.
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 11
/*
This expression evalutes to the Number 3 and ignores everything past the decimal since the decimal is a non-numeric character.
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 12
/*
This expression evaluates to true because each character of a string is compared one at a time. Therefore, the expression is evaluating the 1 and the 9, not the 12 and the 9. 1 is less than 9 so the expression is true.
*/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
