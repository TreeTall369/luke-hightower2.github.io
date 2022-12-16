// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
//Assign a function to our our `greeting` variable that takes 3 inputs: `greeting`, `location` and `time`. Concatanate these values together to form a viable sentence and log it to the console.
//Don't forget the spaces!

var greeting = function(greeting, location, time){

console.log(`${greeting} ${location} ${time}`)
}


// 2.
// find the number of elements in the dog array
var contestants = function(){
return dogs.length;
};



// 3.
// Using the native filter method with our `dogs` 
// array, create an array called `filterSpecies` that 
// will filter out all of the species that are not dogs! 
var filterSpecies = dogs.filter(function(items){
   if (items.species === 'dog'){
    return items
   }
})

// 4. 
// use spread operator to create copy of array
// array = [1,2,3]
// array2 = [...array]
var dogContestants = [...filterSpecies];


// 5. 
var dogsWithClasses = dogContestants.map(function(contestants){

  if (contestants.weight <= 10){
    contestants.class = 'red' // red
  } else if (contestants.weight <= 20){
    contestants.class = 'yellow' // yellow
  } else {
    contestants.class = 'green' // green
  }

return contestants
});
    

// 6.
var firstInClass = function(array, output={}){
    // base case
if (array.length === 0){
    return output
}

    // recursion case
Object.assign(output, array[0] )
    return firstInClass(array.slice(1), output)
};



// 7.
var votes = dogs.reduce(function(acc, current){
    return acc + current.votes
}, 0);