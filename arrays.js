// Exercise 1
/*
array1 has length 4.
array2 has length 5.
array3 has length 0.
array4 has length 4.
array5 has length 101.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

  myArray.forEach ( element => {
    if (element % 2 === 0) {
      console.log(element);
    }
  });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
]

 // loop through array 
for (let i = 0; i < myArray2.length; i += 1) { 
  // loop through each array element
  for (let j = 0; j <myArray2[i].length; j += 1) {
    let element = myArray2[i][j]; 
    // logs even numbers
    if (element % 2 === 0) {
      console.log(element);
    }
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4

let myArray4 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray4.map(function (num) {
  if (num % 2 === 0) {
    return "even";
  } 
  if (num % 2 !== 0) {
    return "odd";
  }
});

console.log(evenOrOdd);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

function findIntegers (array) { // takes in array
  return array.filter(function(element) { // look at each element
    return Number.isInteger(element); // return only number types
  });
}

console.log(integers); 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (array) {
  let lengthArray = array.map(element => element.length);
  return lengthArray.filter(function(num) {
    if (num % 2 !== 0) {
      return num;
    };
  });
}

console.log(oddLengths(arr)); // => [1, 5, 3]


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 7

let array = [3, 5, 7];

function sumOfSquares (arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0);
}

console.log(sumOfSquares(array)); // => 83

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 8

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (strings) {
  return strings.reduce(function (newArray, currentElement) {
    if (currentElement.length % 2 !== 0) {
      newArray.push(currentElement.length)
    };
    return newArray;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 9

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 10

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr[1]); // ['example', 'mem', null, 606, 88]


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~