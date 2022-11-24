

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
 *      Operators are links by which connect variables. In a metaphorical sense, Operators are conjunctions that 
 *      bring together each piece of the language to form a conherent thought. Without conjuctions no sense could 
 *      be made at all. Operators are categorized based on their purpose. We'll thorouhly describe and exemplify 
 *      each of them. 
 * 
 *      Assignment Operators: 
 *              The = sign is the seminal assignment operator. This differs greatly from == and ===. The = can 
 *              be followed by a plus =+ as such minus =- and =*, =/, **= etc. The function the assignment operator is 
 *              extending the 'point to' effect as mention above. We'll assign variables to expressions throughout our
 *              code to bring about our intention. 
 * 
 * 
 *              examples 
 *                  
 *              
 * 
 *      Arithmetic Operators:
 * 
 *              As is evident in their name the arithmetic operators are for mathmatical purposes. Most are familiar +, -, /, * 
 *              However some ar orignal to JavaScript. Like modulus opertaor % which when placed between to number will return
 *              the remainer as a whole number. The carrot ^ functions to indicate an exponent. And do remember the = sign 
 *              will not be neccessary to return a value like writing our math problems. There are other mathmatical elements
 *              in JavaScript eg math.Random(), parseFloat() etc.. It's important to notice the extent of math within 
 *              JavaScript and how it is represented differtly than common mathmatics. 
 *              
 *              adding strings, adding strings and numbers
 *              increment, decrement
 *              examples
 *              console
 * 
 *      Comparison Operators:
 * 
 *              Comparisons are made in JavaScript like the words: 'is equal' and 'greater' and 'lesser than' are used
 *              in conversation. Though this with much greater specificity. Operators == and ===. Signfy values being the same.
 *              The === reprensently being strictly equal to, ie each character. The == provides a more inclusive equality where
 *              numbers and string representations of number are equal. The < > are used as one would prdeicr with number
 *              values simiarly with <= and >=. These operator have itnering usefulness when applied to strings and to boolean
 *              values. True is greater than False. An letter have numerical representation used to alphabetize them with 
 *              special method. Essentially the < > Operators have several other uses beyond numbers. Lastly the bang operator
 *              is another key tool. !== and != both mean the opposite of ther predecessor. Not equal, stricly, loosely. 
 * 
 *              examples
 *              console
 *      
 *      Logical Operators:
 * 
 *              Logical Operators, this operators work within conditional statements ie if, else if, else... statements.
 *              These operators include the && double ampersand to mean A &&(and) B are yada yada yada. Both this to be true
 *              both values A,B must be in agreement. For example if A && B are numbers above 10... If they are indeed above
 *              ten this expression is true. Otherwise if A is 9 or lower it will not be true. If we want code that will be 
 *              more inclusive and say that A or B can be something we'll use the || or opertar. A || B can be above ten 
 *              for our conditional statement to express true. Lastly, there is ! which like above signfies not being equal. 
 *              An example of this is if (!varExample){ varExample++ }. The condition is the variables negation which could
 *              be the product of another function or expression. 
 * 
 *              example
 *              console
 * 
 *
 *              
 *      Unary Operators:
 * 
 *             Unary Operators are refering to single variable operations. Simply the operand and one variable. Examples 
 *              of these include +varExample and -varExample, which will turn the value into a number or its negative, or typeof varExample, which will 
 *              return a string of the type of value (with some exceptions). Others are instanceof and !
 * 
 *              example
 *              console
 *  
 *      Ternary Operator:
 * 
 *            The Ternary Operator is also under the umbrella of comparison operators. This is best explained by reading
 *              out the syntax, A ? B : C. Out loud so-to-speak, this is If A is true do B, if false do C. Using the ternary
 *           will having a condtion A (eg. age >= 21) followed by to outcomes B ('may enter the bar') and : C ('not allowed inside')
 *           If the age being equal or above 21 is true the value of the expression will be whatever is first, if false then what 
 *           then the second outcome will be the value. 
 * 
 *          example
 *          console
 * 
 */






/**
 *          STRING MANIPULATION 
 * 
 *            with operators, with string methods
 * 
 *          Strings are a crucial part of JavaScript. Our ability to manipulate words in 
 *          any way possible will be eseential throughout website development. Spellcheck, predictive-text
 *          text upload, password chechking, etc all involve the movement of strings. Strings, like arrays
 *          have indices going from 0 - very large from left to right. We can use for loops to 
 *          take a string and loop through each of it's characters. There are critical methods to strings
 *          that allow us to find characters, splits the string up into an array and join the string from an
 *          array back into string, als strings can be upper and lower cased etc. Each letter of the alphabet 
 *          case aside is also represented as a nimber code allowing us to pass the string info in multiple
 *          ways and to compare strings in helpful way too. The + operator is always partiuclarly helpful in 
 *          concatenating strings though the + often needs ' ' around it to make legible sentences. The manipulation 
 *          of strings parallel that of arrays. Both have indexes and are accessible through bracket notation.
 *          Develops are commonly moving values between arrays and strings depending neseiccty becuse of this 
 *          simillarity. 
 * 
 *          examples
 *          list of methods
 *          console
 * 
 * 
 */




/**
 *          CONTROL FLOW
 * 
 *          if, else if, else --- switch statements
 * 
 *          Control Flow refers almost exclusively to conditional statements and the power they give
 *          a developer to pass values through a chain of conditions (boolean values) to determine what action
 *          the data requires. In a general sense control flow is filtering with conditional statements as 
 *          our sifter. We must ask if numerous aspects of a piece of data are true (e.g. if its a number, big, 
 *          small, a letter, case, length etc) and to do this we have to be thoughtful or at least flexible 
 *          about how we arrange the control flow. Certain details need to be checked first, is what that means.
 *          At times the path of the condtions needed to get a function do what it needs to do is unexpected. Thus 
 *          it is advisable to experiment with different arrangements for different outcomes. Along with finding 
 *          clever ways to filter data we need to be mindful of using the simplest and least repetitive code
 *          when developing control flows. A simple code sometimes starts out messy so working it down to a
 *          more refined method is key to the best control flow. 
 *             if, else if and else statements form a trio. To properly utilize these we'll complete all three
 *          elements --- 
 * 
 *          first part:             if(condition){
 *                            perform action   } 
 *          second part:          else if(condtion){
 *                            perform action  
 *          last part:             } else {
 *                            perform action }
 *           
 *              In this context the first and second conditions will be written within the parethesis while the 
 *              last part does not have a condition. The last: else{ } is essentially a default action. We can fill
 *              this chain of code with as many "else if" conditions as needed. This provides the develop a way of 
 *              sending a complex chain of actions with desired outcomes honed in upon. A side note, we do not use 
 *              return within the action 
 * 
 *          Switch statements are a modified version of if
 * 
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