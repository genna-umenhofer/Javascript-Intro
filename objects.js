// Exercise 1
person['name'];
person.name;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 2
/*
All of the keys are valid.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 3
let myArray = {
  0: 'orange',
  1: 'chard',
  2: 'crab',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let capitalArray = []; // a place to put the capitlized keys
let capitalObj = Object.keys(obj); // pulls the keys from the object

capitalObj.forEach ( key => { // capitalize and push keys 
  capitalArray.push(key.toUpperCase());
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObject = Object.create(myProtoObj);
myObject['qux'] = 3;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 6
/*
The primitave values are "foo", 3.1415, false, and undefined.

The object values are ['a', 'b', 'c'], function bar () { return "bar"; }, and { a:1, b: 2}.

The identifiers are foo.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 7
/*
These do not produce the same output. The for loop includes the prototype keys, but the Object.keys method only includes the object's own keys.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 8
let objToCopy = {
  fruit: 'orange';
  color: 'red';
  number: 7;
}

// My attempt
function copyObject (obj, arr) {
  let objectToCopyKeys = Object.keys(obj);
  for (let i = 0; i < objectToCopyKeys.length; i += 1) {
    // ?? Not sure, got stuck
  }
}

// After looking at solution
function copyObj(sourceObject, keys) {
  let destinationObject = {}; // I did not know you could make empty objects to fill.

  if (keys) { // Use if/else statement instead of for loop
    keys.forEach(function(key) { // Iterates through the array we passed as an argument
      destinationObject[key] = sourceObject[key]; // checks for key in object and array, note = not === because of the data type we are using
    });

    return destinationObject; // 'pushes' to new object if a key matches
  } else {
    return Object.assign(destinationObject, sourceObject); // push all if no array is passed
  }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 9
/*
This code logs 'hi' and 'hello' to the console, then returns undefined.
First, the function bar takes in the foo object and reassigns the a key to a value of 'hi' since it is an object and is mutable. 
Then, the function bar takes the qux variable and attempts to reassign it to a value of 'hello', however it cannot be changed in this way because it is a string value. When the function stops, the reassignment is no longer present. The original value remains.
Next, we log foo.a to the console, which is now a value of 'hi'.
Lastly, we log qux to the console, which is still a value of 'hello'.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 10
/*
There are 6 primitive values, and they are: 1, 2, "a", "b", false, and null.
There are 4 objects, and they are: the whole array, the array[2], the array[2][1], and {}.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise 11
obj.bar[3].xyz = 606;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~