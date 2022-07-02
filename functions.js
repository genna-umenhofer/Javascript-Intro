// Exercise 1
/*
The code logs the number 1 to the console. Foo does not affect the output because it changes the value of bar, however, the value of bar changed by foo is locally scoped. Therefore, the globally scoped value of bar is what ends up logged to the console. 
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2

function getName (question) {
  let name = prompt(question);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3

function getNumber (question) {
  let number = prompt(question);
  return number;
}

function multiply (firstNumber,secondNumber) {
  return firstNumber * secondNumber;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
/*
The code does not log anything due to the return stoping the function before it is able to run the console.log line of code.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
/* 
Initial answer:
The code logs 'Yipeee!!!!' becuase the return statement is the concantenation of the words and the exclamation marks. 
//------
Appended answer after viewing the solution:
There is no actual code that tells the program to log anything. It just returns the value, but the value is not written to the console.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~