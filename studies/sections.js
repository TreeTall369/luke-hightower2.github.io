

/**
 *          VARIABLES declaration and assignment var, const, let hoisting
 * 
 *         This is an introduction to Variables. The following will explain, through written 
 *          and coded examples the essence of variables in JavaScript. 
 * 
 *         Variables are the building blockes of object oriented programming. Variables hold, or 
 *          point data. It is with variables that we are able to relate these pieces of data (value or
 *          reference) to one another. Variable build into functions. 
 *
 *          The first form of declaring a variable was var --- as seen below the keyword(symbol) var
 *          declares the variable exampleVariable. 
 *                  BRIEF ASIDE:  --- camelCase required in all variable declaration --- 
 *                                --- lowerCase, followedBy, upperCaseThereAfter, theEnd ---
 *          
 *          We can also assign the variable to some data. In the case below the variable is now assigned
 *          to the string 'Hello Louisiana!'. In this example we have declared the variable on one line
 *          and assigned it on the next. If we wish we can declare and assign on the same line like 
 *          the example talkative which is declare with var and assigned to a string with the assignment 
 *          operator = . 
 * 
 *          The catch, so to speak, to var and its power is that we as developer will inevitably re-declare 
 *          variables that will not be noticed. Why is this? What does this mean? Using var allows the developer
 *          to var and that same variable name and the value ie what the variable points at will also re frame . 
 *          We're left with a loose bolt in the structure. ES 6, a major update to JS in 20... Added const 
 *          and let. These dont allow us to redeclare them without throwing an error. Const can't even be reassigned.?
 * 
 *          
 *          Edit and rewrite some parts
 *          Write Hoisting section
 *          What's with the 0. 1. 2. format? Really necessary?
 *          Dont forget!  CONSOLE.LOG() each part...
 */

var exampleVariable;
exampleVariable = 'Hello Louisiana!';

var talkative = 'What is going on?';

const friendInvite = function(friend){
    return 'Hey' + ' ' + friend + ' ' + 'do you want to come over?'
}

let i = 0;

// hoisting


/**
 *          DATA TYPES
 *  
 *          
 *          what is primitive and complex data types 
 *          what is copy by reference / copy by value
 * 
 * 
 * 
 * 
 * 
 *          The way we use the word data can be tricky. To be precise about the word referring to information
 *          data are collections of datum. Some data is a collection of these collections. This could be
 *          considered entirely useless information though it would still be plural. 
 *          
 *          Types of data, and the nuances of their differences is very important! To begin, a list of 
 *          data types: 
 *                  number 99 - numbers function mathematical ie decimal point and aritmetic operators, primitive
 *                  boolean true or false - true is greater than false, true is 1 and false is 0? primitive
 *                  string 'anything inside the quotes' - characters have number value... primitive data
 *                  array  ['information'] - complex data that holds other data, can be empty
 *                  object  { key:value } - complex data hold info in unorderlist by key:value pairs, use commas
 *                  function   function(){} - can take input, can return output, if called fx's are expressions
 *                  undefined  is undefined - signaling lack of 'pointing' to anything
 *                  null  is an object... 
 *                  Nan         
 *                  Infinity  
 *                  neg.Infinity
 * 
 * 
 *                  What are primitive data types? Complex?
 *                  What is copy by value? When does it matter?
 *                  What is copy by reference? How it differs from copy by value? 
 * 
 *                  dont forget console.log()
 */





/**
 *          OPERATORS
 * 
 *               assignment arithmetic comparison logical unary ! typeof, - ternarty a ? b : c
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */






/**
 *          STRING MANIPULATION 
 * 
 *            with operators, with string methods
 * 
 * 
 * 
 * 
 * 
 * 
 */




/**
 *          CONTROL FLOW
 * 
 *          if, else if, else --- switch statements
 * 
 * 
 * 
 * 
 * 
 * 
 */





/**
 *          LOOPS
 *      for, for-in, while loops 
 *      loop numbers up and down 
 *      loop forward, backward in array 
 *      loop over object, over array
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



/**
 *          FUNCTIONS
 *  
 *      the first two phases using fx's. Declare then Invoke/Call 
 *      whats the difference between parameters and arguments passed to a function
 *      whats the syntax for a named function?
 *      how do we assign a function to a variable?
 *      How do we specify inputs and outputs
 *      Scope: functions can see and modify variable in parent and global scopes, inverse not true
 *      Closures: functions form closures arpund the data they house. if an object returned from the function 
 *      and is held in memory somewhere (referenced), that closrue stays alive, and data can contunue to exist in these closures!
 * 
 * 
 * 
 * 
 * 
 */