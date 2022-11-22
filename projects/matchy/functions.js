/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a function called search
function search(animals, nameString){
    for (i = 0; i < animals.length; i++){
        if(animals[i].name === nameString){
            return animals[i]
        } 
    }
    return null
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, nameString, newAnimal){
    for (i = 0; i < animals.length; i++){
        if(animals[i].name === nameString){
            return animals[i] = newAnimal;
        } 
    }
    return null
    }



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 3 - Remove
//  1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
//    - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//    - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.
function remove(animals, nameString){
    for (i = 0; i < animals.length; i++){
        if(animals[i].name === nameString){
            return animals[i] = ''
        } 
    }
    return null
    }



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 4 - Add
//  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//    - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//    - Checks that the animal Object has a `name` property with a length > 0.
//    - Checks that the animal Object has a `species` property with a length > 0.
//    - Has a **unique** name, meaning no other animals have that name.
//    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//    - Make sure it works.

function add(animals, animalObject){
   
var nameTruth

  var animalName = animalObject.name;
    var uniqueName = function(){ for (var i = 0; i < animals.length; i++){
     return animals[i].name === animalName;
    }}

    if(animalObject.name.length >= 1 && animalObject['species'].length >= 1 && uniqueName() === true){
        return animals
    // } else if (animalObject.name.length > 0 && animalObject.species.length > 0 && uniqueName() === false){
    //     return animals.push(animalObject)
    } else {
        return animals.push(animalObject);
    }
    }



    



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
