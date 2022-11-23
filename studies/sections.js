

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
 * 
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
 *          number boolean  array object function undefined null  Nan Infinity and neg.Infinity 
 *          what is primitive and complex data types 
 *          what is copy by reference / copy by value
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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