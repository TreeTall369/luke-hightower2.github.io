// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./luke-hightower2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace  
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
};

var femaleCount = function(array){

    let females = _.filter(array, function(customer){
        return customer.gender === 'female';
    })
    return females.length;
};

var oldestCustomer = function(array){
    let example = _.reduce(array, function(acc, cur){
        if(acc.age >= cur.age){
          return acc
        } else if (acc.age < cur.age){
          return cur
        }
      })
      return example.name
};

var youngestCustomer = function(array){
    let example = _.reduce(array, function(acc, cur){
        if(acc.age >= cur.age){
          return cur
        } else if (acc.age < cur.age){
          return acc
        }
      })
      return example.name
};

var averageBalance = function(array){
    let holder = [];
    for (index = 0; index < array.length; index++){
      holder.push(array[index].balance.split(''))
    }
    let newHolder = [];
    for(let i = 0; i < holder.length; i++){
      for(let j = 0; j < holder[i].length; j++){
        if(holder[i][j] !== '$' && holder[i][j] !== ','){
          newHolder.push(holder[i][j])
        }
      }
      newHolder.push(' ')
    }
    let h = newHolder.join('')
    let s = h.split(' ')
    let sum = _.reduce(array, function(acc, cur){
        return Number(acc) + Number(cur)
    }, 0)
    let members = array.length
    let avg = sum.toFixed()/members
      return avg
    }

var firstLetterCount = function(array, letter){
    let count = 0
    for (let index = 0; index < array.length; index++){
        if(array[index].name[0].toLowerCase() === letter.toLowerCase()){
            count++
        }
    }
    return count
};

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0
    for (let index = 0; index < array.length; index++){
        for(let j = 0; j < array[index].friends.length; j++)
            if(array[index].name === customer && array[index].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
                count++
        }
    }
    return count
};

var friendsCount = function(array, title){
    let list = []
    for (let index = 0; index < array.length; index++){
        for(let j = 0; j < array[index].friends.length; j++)
            if(array[index].friends[j].name === title){
                list.push(array[index].name)
        }
    }
    return list
};

var topThreeTags = function(){
};

var genderCount = function(array){
    let mCount = [];
    let fCount = [];
    let nCount = [];
    if (array[0].gender === 'male'){
      mCount.push('male')
    } else if (array[0].gender === 'female'){
      fCount.push('female')
    } else if (array[0].gender === 'non-binary'){
      nCount.push('non-binary')
    }
      
    _.reduce(array, function(acc, cur){
              if(cur.gender === 'male'){
            mCount.push(cur.gender)
              }})
    _.reduce(array, function(acc, cur){
              if(cur.gender === 'female'){
             fCount.push(cur.gender)
              }})  
    _.reduce(array, function(acc, cur){
              if(cur.gender === 'non-binary'){
             nCount.push(cur.gender)
              }})
    let genObject = {}
    genObject.male = mCount.length;
    genObject.female = fCount.length;
    genObject['non-binary'] = nCount.length;
      return genObject
    }
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
