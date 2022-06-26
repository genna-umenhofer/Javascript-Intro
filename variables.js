// Exercise 1
let firstName = 'Victor';

console.log(`Good Morning, ${firstName}.`);
console.log(`Good Afternoon, ${firstName}.`);
console.log(`Good Evening, ${firstName}.`);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
let age = 20;

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
/*
When the code is run, there is an uncaught reference error that says foo is not defined. This is because foo is defined within a block, and is not accessible to the expression that is trying to log the value of foo to the console.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
/*
When the code is run, there is an uncaught type error that a constant is being reassigned. This is because the NAME variable is declared with the const keyword. This means that it cannot be redefined within a program. The reassignment attempt lated in the program with the name 'Joe' is not able to be completed becuase NAME is tied to the initialized data as a constant variable.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
/*
This program logs bar to the console becuase that is the initial value in the declaration of the foo variable. The foo variable is declared again within a code block, however, that is only avaibale at the block scope and not to the expression that console.logs foo.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
/*
This program will not produce an error becuase the const keyword is block scoped. Essentially, the console.log() expression does not see the reassignment, and therefore the error is not produced when the code is run.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
