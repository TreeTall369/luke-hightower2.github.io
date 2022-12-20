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

//      let array = [{balance: '$1,000.00'}, {balance: '$1,000.00'}, {balance: '$1,000.00'}]
//      let arr1 = []

//      for (index = 0; index < array.length; index++){
//      for (j = 0; j < array[index].balance.length; j++)
//      if (array[index].balance[j] !== '$' && array[index].balance[j] !== ','){
//      arr1.push(array[index].balance[j])
//      } 
//      arr1.push(' ')
//      }
//     let cash = arr1.join(''))



    let sum = _.reduce(array, function(acc, cur){
            let clear1 = acc.balance
            let clear2 = cur.balance
            let arr1 = []
            let arr2 = []
            for (index = 0; index < clear1.length; index++){
                if (clear1[index] !== '!' && clear1[index] !== ','){
                    arr1.push(clear1[index])
                }
            }
            for (index = 0; index < clear2.length; index++){
                if (clear2[index] !== '!' && clear2[index] !== ','){
                    arr2.push(clear2[index])
                }
            }
        

        let test1 = Number(arr1.join('')) 
        let test2 = Number(arr2.join(''))
        return test1 + test2
    })

    let items = array.length
    let avg = sum / items

    return avg;
};

var firstLetterCount = function(array, letter){
    let count = 0
    for (let index = 0; index < array.length; index++){
        if(array[index].name[0].toLowerCase() === letter.toLowerCase()){
            count++
        }
    }
    return count
};

var friendFirstLetterCount = function(array, letter){
    let count = 0
    for (let index = 0; index < array.length; index++){
        for(let j = 0; j < array[index].friends.length; j++)
            if(array[index].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
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
    let commonTags = []
    for (let index = 0; index < array.length; index++){
        for(let j = 0; j < array[index].tags.length; j++)
            if(array[index].tags[j].name === title){
                list.push(array[index].name)
        }
    }
    return list
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
