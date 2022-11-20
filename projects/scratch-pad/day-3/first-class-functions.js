// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // input: base, is a string or number
    // output: function that tests 'given value' (parameter in new function) against base for greater-ness
    // constraints: base is string or number, no case-sense 
    // edge cases: negative numbers?

    
if (typeof base === 'number'){
    var aFunk = function(givenValue){
       return  givenValue > base
    }
    return aFunk
} else if (typeof base === 'string'){
    var bFunk  = function(givenValue){
       return givenValue > base       
}
    return bFunk
}
  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     

    if (typeof base === 'number'){
        var aFunk = function(givenValue){
           return  givenValue < base
        }
        return aFunk
    } else if (typeof base === 'string'){
        var bFunk  = function(givenValue){
           return givenValue < base       
    }
        return bFunk
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
   //       input : single charactrer, string
   //       outpout: function takes in string and tests againgst starstWith
   //       constraint: 
   //       edge cases: not a letter, case sensitive alignment

   return function(string){
    //test first char in string againt startsWith
    if(string[0].toUpperCase() === startsWith.toUpperCase() && /[a-zA-Z]+$/.test(startsWith)){
         return true;
    } else {
        return false;
    }
   }

    // YOUR CODE ABOVE HERE //
}



/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // input one character
    // output function must return a function that tests the char
    // constraints
    // edges case sensitive, other char

    // return function - parameter is called string
    return function(string){
        // if/else statement for char, access char with Uppercase && no extra chars
    if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase() && /[a-zA-Z]+$/.test(endsWith)){
        return true;
   } else {
       return false;
   }
  
    }
    // YOUR CODE ABOVE HERE //

}
/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // input an array of strings, a function called modify
    // o an array with all indices of input-array modified. 
    // c 
    // e 

    // heeding the tip we declare an array here for gathering the nodifed strings
   var collection = []
    // for-loop most approriate, looping over strings array
   for (var i = 0; i < strings.length; i ++){
    // pushing function value into collection array
    collection.push(modify(strings[i]))
   }
   // cant forget to return the collection array to complete the task
   return collection
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
// input: array of strings , one function designed for a string
// output: boolean
// constraints: has to take all cases, any character
// edge cases: N/A


// declare a literal array
    var booArray = []
// for-loop over strings array ie parameter array    
for (var i = 0; i < strings.length; i++){
// declare variable to hold each value of the function results during loop    
    var func = test(strings[i]) 
// push all of those booleans into one array
    booArray.push(func)
}
// use the .every method --- is it true that every index === true? --- to test the boolean, .every method also gives a boolean so the method can be used in the return like to complete the task
return booArray.every(index => index === true)
 
    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
