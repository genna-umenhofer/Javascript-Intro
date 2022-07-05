// Exercise 1
false || (true && false);                                                     // false
true || (1 + 2);                                                                   // true
(1 + 2) || true;                                                                   // 3
true && (1 + 2);                                                                // 3
false && (1 + 2);                                                              // false
(1 + 2) && true;                                                                // true
(32 * 4) >= 129;                                                               // false
false !== !true;                                                                 // false
true === 4;                                                                       // false
false === (847 === '847');                                                // true
false === (847 == '847');                                                  // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
function evenOrOdd (argument) {
  if ((argument % 2) === 0) {
    console.log('This is an even number.');
  } else {
  console.log('This is an odd number.');
  }
}

evenOrOdd(3);    // 'This is an odd number.
evenOrOdd(10);  // 'This is an even number.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
function evenOrOdd (argument) {
  if (!Number.isInteger(argument)) {
    console.log('This value is not an integer. Please enter na integer.')
    return;
  }
  if ((argument % 2) === 0) {
    console.log('This is an even number.');
  } else {
  console.log('This is an odd number.');
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
/*
This code logs 'Product 2', 'Product 3', and 'Product not found' to the console because the switch statement does not contain any break keywords. It continues to fall through the code after the first case that it runs because there is no break keyword.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
if (foo()) {
  return 'bar';
} else {
  return qux();
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
/*
This function logs 'Not Empty' to the console.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 7
function uppercaseLongPhrase (phrase) {
  if (phrase.length > 10) {
    return phrase.toUpperCase();
  } else {
    return phrase;
  }
}

console.log(uppercaseLongPhrase('Hello'));                  // 'Hello'
console.log(uppercaseLongPhrase('Hello Beautiful'));   // 'HELLO BEAUTIFUL'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 8
function checkNumberRange(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50.`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100.`);
  } else if (number < 0) {
    console.log(`${number} is less than 0.`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100.`);
  } else {
      console.log('Unable to determine number range. Please try again.');
  }
}
checkNumberRange(25);     // '25 is between 0 and 50.'
checkNumberRange(75);     // '75 is between 51 and 100.'
checkNumberRange(125);  // '125 is greater than 100.'
checkNumberRange(-25);   // '-25 is less than 0.'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~