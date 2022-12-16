////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, step) {
// fx should create array with contents of integers within given range
// need loop for counting up if num1 < is lesser than num2 
// need looop for counting down num1 > is greater than num2
// need to check for parameters bein equal to one another --- returns []
let array = []

if (step === undefined){
    if (num1 === num2){
    return array
    } else if (num1 < num2){
    // for loop count up from num1 to num2 -- no step factor
      for (let i = num1; i <= num2; i++){
        // push acscending range into array
        array.push(i);
      }
    } else {
    // for loop count down from num1 to num2 -- no step factor
      for (let j = num1; j >= num2; j--){
        // push range descending range into arraay
        array.push(j)
      }
    }
} else if (step > 0){
  //
  if (num1 === num2){
    return array
    } else if (num1 < num2){
    // for loop count up from num1 to num2 BY THE STEP FACTOR
    for (let i = num1; i <= num2; i += step){
      // push ascending range by step into array 
      array.push(i)
    }
    } else {
    // for loop count down from num1 to num2 BY THE STEP FACTOR
    for (let j = num1; j >= num2; j -= step){
      // push descending range by step into array
      array.push(j)
    }
    }
} else if (step < 0) {
  return array;
} 

return array;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let inValue = 0
  if (array.length > 0){
 return array.reduce((acc, cur) => acc + cur, inValue)
  } else {
  return 0
  }
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let copy = [];
  for (index = array.length - 1; index >= 0; index--){
    copy.push(array[index])
  }
  return copy
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
return array.reverse()
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

  let list = null;
  for (let i = array.length -1; i >= 0; i--) {
      list = { value: array[i], rest: list }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                          // must use default parameter, going to return in recursion
function listToArray(list, array=[]) {
// base case
// recrusion will stop when list.rest reaches null
if (list.rest === null){
// on last step of recursion we need to add final value from the last object
  array.push(list.value)
// after that recursion is ending so we return the array, now completed having hit the base case
  return array
}
// here we push the desired value into the array, using dot notion to grab the value out of each object
array.push(list.value)
// recursive case
// we need to return list.rest ie the other key in the object, that value is the next layer of the nested object. 
// this with go to the base case, if not null, it will push list.value, as programmed. 
 return listToArray(list.rest, array)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(parameter, list){
  // inserts value into list at first position (before all other elements)
  // declare variable set to function expressed. will be array
  let arrayInfo = listToArray(list, array=[]); 
  // unshift desried parameter into array 
  arrayInfo.unshift(parameter)
  // set variable equal to function arraToList, will be list (object)
  let newList = arrayToList(arrayInfo)
  // return new list with parameter added properly
      return newList
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
// tkes list (object) index given as number
// declare variable equal to arry from listtoarray function
let arrayInfo = listToArray(list, array=[]);
// access desired info with bracket notice b/c we only know the index.
let value = arrayInfo[index]
//return the element
return value;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
// determine if Both x and y are not onjets
if (typeof x !== 'object' && typeof y !== 'object'){
  return x === y;
}

if (typeof x !== 'object' || typeof y !=='object'){
  return false;
}

// create arrays of keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);
// determine if xKeys and yKeys have diffferent lengths
if (xKeys.length !== yKeys.length){
  return false;
}
// iterate through xKeys array
for (let i = 0; i < xKeys.length; i++){
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
