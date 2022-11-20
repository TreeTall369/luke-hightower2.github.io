// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to iterate through array
  // use bracket notation to print each value
  for (var i = 0; i < array.length; i++){
    console.log(array[i])
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // use .reverse method to turn the array around
  var arrayReverse = array.reverse()
  for (var i = 0; i < arrayReverse.length; i++){
    // loop over arrayReverse and print to log
    // use bracket notation to access indices inside array
    console.log(array[i])
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // instead of looping through keys, pushing into array and returning that..
  // use Object.keys() method to create array of keys
  var keyVar = Object.keys(object);
  return keyVar;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use for - in loop to log each key to console

  for (var key in object){
  
    
    console.log(key)
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use Object.values method to return an Array of values
  return Object.values(object)
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object){
  console.log(object[key])
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // use Object.getOwn PropertyNames() method to get array of entries. 
  var nameArray = Object.getOwnPropertyNames(object)
  // declare variable to be value of length i.e. the amount of key/value pairs in object
  var size = nameArray.length
  // return size variable to complete task
  return size
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
 var valuesArray = Object.values(object); 
 var reverseArray = valuesArray.reverse();
 for (var i = 0; i < reverseArray.length; i++){
  console.log(reverseArray[i])
 }
 
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
