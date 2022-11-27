//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
    } 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

var stringJect = Object.keys(object);
return stringJect.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = []
    for (var key in object){
        if(typeof object[key] === 'string'){
            array.push(object[key])
        }
    }
    return array.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
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
  
  
  
    var array = string.split('');
  var letter = array[0];
  array.shift();
  array.unshift(letter.toUpperCase())
  return array.join('')

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var openArray = [];
    var split = string.split(' ');
      
        for (var f = 0; f < split.length; f++){
    
        var letter = split[f][0];  
        var parWord = split[f].split('')  
        openArray.push(parWord)
    
            }
    
    var lastArray = []
    
        for (var a = 0; a < openArray.length; a++){
      
        var mLetter = openArray[a][0];
        openArray[a].shift();
        openArray[a].unshift(mLetter.toUpperCase());
        lastArray.push(openArray[a].join(''));
        var sentenceChange = lastArray.join(' ');
      
    }
    
    return sentenceChange;
      
    }
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    var name = object.name;
    var nameArray = name.split('');
    var letter = nameArray[0];

    nameArray.shift();
    nameArray.unshift(letter.toUpperCase())
    var xName = nameArray.join('')

    return 'Welcome ' + xName + '!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var nInfo = object.name;
    var nArray = nInfo.split('');
    var letterO = nArray[0];

    nArray.shift();
    nArray.unshift(letterO.toUpperCase())
    var yName = nArray.join('')

    var sInfo = object.species;
    var sArray = sInfo.split('');
    var letterP = sArray[0];

    sArray.shift();
    sArray.unshift(letterP.toUpperCase())
    var zName = sArray.join('')

    return yName + ' is a ' + zName; 


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   
    if(Object.values(object).length === 0){
       return 'there are no noises'
      } else if (!object.noises){
        return 'there are no noises'
      } else if (object.noises.length === 0 || object.noises.length === undefined){
        return 'there are no noises'
      } else { 
        return object.noises.join(' ')
      }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    var splitUp = string.split(' ')
    var wArray = []

    for (var i = 0; i < splitUp.length; i++){
      if (splitUp[i] === word){
      wArray.push(splitUp[i])
      } else {}  
    }
    
    var result; 

      if(wArray.length > 0){
        result = true
      } else {
        result = false
      }
   return result
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
        
    var array = object.friends
    array.push(name)
    object.friends = array;

    return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

    var array = object.friends
    var result = []; 
    
    if (!object.friends){
            console.log('false -- no friend property to check')
    } else if (object.friends.length > 0){
            console.log('--- there is a friend property')
              for (var k = 0; k < array.length; k++){
                      if (array[k] === name){
                        console.log('--- friend is already on the list')
                    result.push(array[k]);
                    } else {
                        console.log('unfound at index ' + [k])
                    }
                }
            } else {
              console.log('--- empty friend array')
            }
    
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
  object[key] = value;
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

  var keyArray = Object.keys(object);
  var pushArray = [];
  var valueArray = [];
  var trimObject = {}
  
  for (var i = 0; i < keyArray.length; i++){
  if (keyArray[i] !== array[0] && keyArray[i] !== array[1]){
      pushArray.push(keyArray[i])
      valueArray.push(object[keyArray[i]])
  }
  }
  for (var index = 0; index < pushArray.length; index++){
    trimObject[pushArray[index]] = valueArray['index']
  }
    return trimObject;
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