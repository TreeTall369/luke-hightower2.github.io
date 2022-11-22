

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // declare variables for each parameter to simplfy
    var i = start;
    var x = end;

    // declare num variable to use for both for-loops
    var num = 0;

    // two literal arrays for each loop
    var array = []
    var arrayOtherWay = []

    // loop UP from i to x - pushes into array
    for (num = i; num <= x; num++){
        array.push(num)
    }


    // loop DOWN from i to x - pushes into arrayOtherWay
    for (num = i; num >= x; num--){
        arrayOtherWay.push(num) 
    }

    // conditional state to toggle between each Array returned based on comparison of parameters
    if (i < x){
        return array
    } else {
        return arrayOtherWay
    }
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}