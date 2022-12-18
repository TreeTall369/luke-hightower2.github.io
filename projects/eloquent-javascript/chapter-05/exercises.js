// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // use reduce method // anonymous function with accumulator and current (initial val is [] at the end)
    return array.reduce(function (acc, cur) {
      // recursively return flatten function so that each piece of array goes back through reduce method.
      // using ternary opertaor to say if there is another array reduce it else return the array with all values
      // since there will not another array at end of the recursion it will not fire ahgian. 
      // using .concat method to bring series of arrays together one at a time.
      return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
  }

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function loop(start, test, update, body) {
// takes in start value, here called start | test func, update func, body func
// put these into a loop that will use value to start, test(value) to end, then incrementing value by
// setting it equal to a func affecting it. last is the body func performing action in middle

  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // dreive every test // all items in array goes thru test // if ANY are false .every return false. 
  // elvery will only return true if all array items pass test with true. 
for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
// create two arrays, one ltr, other called rtl
let ltr = [];
let rtl = [];

for (let i = 0; i < string.length; i ++){
  let script = characterScript(string.charCodeAt(i))
  if (script !== null){
    if(script.direction === 'ltr'){
      ltr.push(script)
    } else {
      rtl.push(script)
    }
  }

}

if (ltr.length > rtl.length){
  return 'ltr'
} else {
  return 'rtl'
}


}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
