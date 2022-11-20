// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // use .length method to return length
    return string.length

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // use toLowerCase method to return chars in string in lowercase
    return string.toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

// use toUpperCase method to return chars in string in uppercase
return string.toUpperCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // use .toLowerCase method to bring into lowercase
    var lowerString = string.toLowerCase()

    // use .split method to make string an Array
    var stringSplit = lowerString.split(' ')

    // use .join method with - to put -'s in between each word
    return stringSplit.join('-')

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // index of char desire is 0
    var index = 0
    // find first letter and char to compare
    var firstLetter = string.charAt(index);
    var firstChar = char.charAt(index);
    // use if statement with toLowerCase method to compare values
    if (firstLetter.toLowerCase() === firstChar.toLowerCase()){
    // given this conditional state if they are equal it will return true
    return true
    // else if values are not equal it will return false
} else {
    return false }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// index of char desire is 0
var indexString = string.length - 1;
var indexChar = 0
// find last letter and char to compare
var lastLetter = string.charAt(indexString);
var lastChar = char.charAt(indexChar);
// use if statement with toLowerCase method to compare values
if (lastLetter.toLowerCase() === lastChar.toLowerCase()){
// given this conditional state if they are equal it will return true
return true
// else if values are not equal it will return false
} else {
return false }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// create a var to return, variable must equal strings concatenated (+)    
var concat = stringOne + stringTwo
return concat
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // variablre already created, uses key word Arugments, all one array  
    var args = Array.from(arguments);

    // create array to return that will join the array made above
    var joinedArgs = args.join('')

    // return joined array
    return joinedArgs

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// variable that will find length of first string 
var first = stringOne.length;

// variable that will find length of second string 
var second = stringTwo.length;

    // if statement, compares first and second
    if (first > second){
    return stringOne
    } else {
    return stringTwo
    }
    //returns longer string
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 function sortAscending(stringOne, stringTwo) {


    // input: two strings
    // output: number 1, -1, 0 
    // constraints:
    // edge cases:
    // YOUR CODE BELOW HERE //


 if(stringOne === stringTwo){
    return 0
 } else if (stringOne < stringTwo){
    return 1
 } else {
    return -1
 }
    

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   // input: two strings
    // output: number 1, -1, 0 
    // constraints:
    // edge cases:
    // YOUR CODE BELOW HERE //

    if(stringOne === stringTwo){
        return 0
     } else if (stringOne > stringTwo){
        return 1
     } else {
        return -1
     }
        

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
