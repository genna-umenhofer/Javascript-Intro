// Exercise 1
/*
This logs the updated array [1, 4, 3] to the console because the variables array1 and array2 point to the same array. Updating array1 in line 3 also updates array2 because it's changing the array that both variables are pointing to. 
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
/*
This error tells me that the argument 'greeting' is not defined within the program. The error can be found in the exercise2.js file, line 4, column 15. 
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
console.log(Math.sqrt(37));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
/*
The following function takes a string and:
  1. Splits each segment at the space character and makes an array.
  2. Reverses the order of the segments in the array.
  3. Iterates over the array and finds the length of the segment.
  4. Pushes the length of the segment to another array due to map.
  5. Returns the resulting array.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
function allMatches (words, pattern) {
// takes in two arguments, words and the pattern
  let matches = []; 
  // creates new array to hold matches
  for (let index = 0; index < words.length; index i += 1) { 
    // for loop iterates over words
    if (pattern.test(words[index])) {
    // checks if the pattern matches any of the words using regex test
      matches.push(words[index]);
      // pushes any matching words to the matches array
    }
  }
  return matches;
  // returns the matches array after it is filled with any matches
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 7
/*
Exception handling is a process that deals with errors that arise in a program that could potentially stop a program. The program reaches the exception test and, if it has an exception, a certain block of code will run. Then, the rest of the program continues. This is useful because we can more easily figure out what the errors are in a program in an easy and repeatable way. It also allows the program to continue even if there is an error that would have cause it to stop.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 8

function isNotANumber(value) {
  return value !== value;
}


function isNotANumber (value) {
  if (value / 0 === Infinity || value / 0 === -Infinity) {
    console.log(`The value ${value} is a number.`);
  } else {
    console.log(`The value ${value} is not a number.`);
  };
}

isNotANumber(23);
isNotANumber('pi');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 9
function isNegativeZero (zero) {
  return 1 / zero === -Infinity;
}
  
  //zero1 += 1;
  //zeroOne = zero1.valueOf();
  //console.log(zero1 / 0);
  //zero2 += 1;
  //zeroTwo = zero2.valueOf();
  //console.log(zero2 / 0);
  /*if (zeroOne === zeroTwo) {
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }; */


console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 10
/*
It returns the 5 as a number instead of a string, but doesn't increment it because that's not how ++ works. ++ first returns the value before it happens. The next value logged would be 6 in this case if the expression were repeated.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~