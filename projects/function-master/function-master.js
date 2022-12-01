//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

  // i : an object
  // o : return an array of values 
  // c : don't know values of object, have to use method
  // e : n/a

  // use Object.values method to get array
    return Object.values(object);
    } 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    // i : object 
    // o : return keys as a joined string each separated with a space
    // c : do not know keys, use method
    // e : n/a

    // use Object.keys to get array
var stringJect = Object.keys(object);
    // use .join method to get string , return to define function
return stringJect.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

  // i : object
  // o : a string of all values in object
  // c : dont know names of values 
  // e : n/a 

  // declare open array
    var array = []

    // loop over object
    for (var key in object){

      // deterimine type using typeof operator
        if(typeof object[key] === 'string'){

          // push method and object access to put it values into array
            array.push(object[key])
        }
    }
    // return function, .join operator to get string 
    return array.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

  // i : collection -- complex data type
  // o : string of data type
  // c : n/a
  // e : n/a

  // using Array.isArray method with if else if statement 
    if(Array.isArray(collection) === true){
        return 'array'
    } else if (Array.isArray(collection) !== true){
        return 'object'
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  
  // i : string 
  // o : string with first letter capitalized
  // c : n/a
  // e : n/a

  // create array of letters with split method
    var array = string.split('');
   // declare variable holding first letter 
  var letter = array[0];
  // pull first letter of word out with shift method
  array.shift();
  // put capitalized letter back in with toUpperCase method
  array.unshift(letter.toUpperCase())
  // return the fumction, join for string 
  return array.join('')

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

  // i : string with several words
  // o : new string with all frist letters of words capitalized
  // c : n/a
  // e : n/a

  // declare open array
    var openArray = [];

    // split string into array of each word using .split with ' ' to find each space in sentecne
    var split = string.split(' ');
      
    // create for loop over array of words
        for (var f = 0; f < split.length; f++){
    
          // declare var to hold first letters
        var letter = split[f][0];  
        // split each word up its own array creating a nested array
        var parWord = split[f].split('')  
        // push it 
        openArray.push(parWord)
    
            }
    // delcare open array to assesmble new sentence in
    var lastArray = []
    
    // for loop over nested arrays of sentence into words into letters
        for (var a = 0; a < openArray.length; a++){
      // declare variable to hold frist letters
        var mLetter = openArray[a][0];
        // move first letters out of array
        openArray[a].shift();
        // put uppercased letter back into first index spot
        openArray[a].unshift(mLetter.toUpperCase());
        // using push and join to bring the array to words and the arrays to one array
        lastArray.push(openArray[a].join(''));
        // final string with all first letters captialied 
        var sentenceChange = lastArray.join(' ');
      
    }
    // define functiin with return 
    return sentenceChange;
      
    }
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {


  // i : object
  // o : string with value from object modified
  // c : n/a 
  // e : n/a 

  // declare var to hold name value
    var name = object.name;
    // assign var to array of name value 
    var nameArray = name.split('');
    // access first letter
    var letter = nameArray[0];
    // bring first letter out
    nameArray.shift();
    // get the adjust back in to the array
    nameArray.unshift(letter.toUpperCase())
    // bring it together
    var xName = nameArray.join('')
    // define function and finish the objective with string concat and var xName
    return 'Welcome ' + xName + '!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

// i : object
// o : two names in string, full statment, cleaned up 
// c : n/a 
// e : n/a 

// find first letter
    var nInfo = object.name;
    var nArray = nInfo.split('');
    var letterO = nArray[0];
// uppercase it
    nArray.shift();
    nArray.unshift(letterO.toUpperCase())
    var yName = nArray.join('')
// find species letter
    var sInfo = object.species;
    var sArray = sInfo.split('');
    var letterP = sArray[0];
// upper case it
    sArray.shift();
    sArray.unshift(letterP.toUpperCase())
    var zName = sArray.join('')
// return name of animal and species in proper statement
    return yName + ' is a ' + zName; 


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   

  // i : object 
  // o : string of all their noises or statement about no noises
  // c : must be object that has noises array, must have items
  // e : objects with out noise array or empty noise array or no prop key at all

  // create control flow with if statemetns
  // if object have no values return statment
    if(Object.values(object).length === 0){
       return 'there are no noises'
       // if not key called noises
      } else if (!object.noises){
        return 'there are no noises'
        // if the noise array is empty or is undefined 
      } else if (object.noises.length === 0 || object.noises.length === undefined){
        return 'there are no noises'
      } else { 
        // if all tests pass return all noises as a string 
        return object.noises.join(' ')
      }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {


// i : 2 strings, one is sentence, the other is single word
// o : boolean depending on word being in sentence string
// c : 
// e : 

// declare var holding array of sentence at each word
    var splitUp = string.split(' ')

    // open array
    var wArray = []

    // for loop to compare word parameter with each item in sentenece array
    for (var i = 0; i < splitUp.length; i++){
      if (splitUp[i] === word){
      wArray.push(splitUp[i])
      } else {}  
    }
    

    // declare result var to later return 
    var result; 

    // boolean will result if array of common words has elements
      if(wArray.length > 0){
        result = true
      } else {
        result = false
      }
      // return result var, ie boolean
   return result
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
       // i : name, object
       // o : object with name add properly
       // c : 
       // e :  

    // var to hold friedsn values
    var array = object.friends
    // push new name ie parameter into same array
    array.push(name)
    // put array back into object 
    object.friends = array;
    // return object
    return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

// i : name and object
// o : boolean regarding name being a friend


// var for friends array
    var array = object.friends
    var result = []; 
    

    // if not friends array (if nothings there)
    if (!object.friends){
            console.log('false -- no friend property to check')
            // if array is not empty run for loop for search
    } else if (object.friends.length > 0){
            console.log('--- there is a friend property')
            // if name is in array
              for (var k = 0; k < array.length; k++){
                      if (array[k] === name){
                        console.log('--- friend is already on the list')
                        // put name into array
                    result.push(array[k]);
                    } else {
                      // if not same name is found 
                        console.log('unfound at index ' + [k])
                    }
                }
                // if empty array comes last
            } else {
              console.log('--- empty friend array')
            }
    // check size of name array , if not empty that mean they are friends
    return result.length > 0;
    

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
// find who person is not friends with 
// print array of all non-friends
// make an array of all the names 
var compareArray = [];
for (var y = 0; y < array.length; y++) {
  compareArray.push(array[y]['name'])
}
// find index in the array for the person
var indexN = 0
for (var self = 0; self < compareArray.length; self++) {
  if (compareArray[self] === name) {
    indexN = self;
  }
}
// if name does NOT equal person nor data.friends[0] nor data.friends[1]
// then we'll push that name into an open array.
var nonFriend = [];
for (var index = 0; index < compareArray.length; index++) {
  if (compareArray[index] !== name && compareArray[index] !== array[indexN].friends[0] && compareArray[index] !== array[indexN].friends[1]) {
    nonFriend.push(compareArray[index])
  }
}
return nonFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // i : object, key, value
  // o : return object
  // c : n/a 
  // e :
  // assign key/value pair to object with bracket notation
  object[key] = value;
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

// loop over array, delete operator for object
  // delete operator // hasOwnProperty method
  for (var i = 0; i < array.length; i++){
  if (object.hasOwnProperty(array[i])){
    delete object[array[i]]
  }
  }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  
  var arrayPush = [];
  for (var index = 0; index < array.length; index++){
  if (array[index] !== array[index + 1]){
    arrayPush.push(array[index])
  }
  }
  
  var finalArray = [];
    for (var dex = 0; dex < arrayPush.length; dex++){
  if (arrayPush[dex] !== arrayPush[dex + 2]){
    finalArray.push(arrayPush[dex])
  }
  }
    
    return finalArray;
  }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}