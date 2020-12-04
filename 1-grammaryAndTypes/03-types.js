/*
    BOOLEAN
     
        - a boolean has two possible values of either true or false
*/
let lightIsOn = true;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);

/*
    NULL

        - null is an empty value. Think of it as an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/* 
    UNDEFINED

        - no value has been assigned, and it does not act as an empty container
*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/* 
    NUMBERS

        - number or integers are literally just numbers. Numbers do not need anything special when being written
*/

let degrees = 40;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let a = Number('123');
console.log(a);

/* 
    STRINGS

        - strings are datatypes used to represent text and are either wrapped in single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = "1050" + '100'; //  string concatenation - take two strings and combines them into one

console.log(first); //150
console.log(second); //1050100

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';

/*
    -when javascript sees that we're trying to add together a number and a string, instaed of using the built in math functionality, it will intead use concatenation to combine the values instead of trying synthesize the values.
*/

console.log(third);
console.log(typeof third);

/* 
    OBJECT

        - objects allow us to store multiple values instead of a single value
        - objects are denoted by {}
        - objects hold what are know as key/value pairs
*/

let frodo = {
    race: 'hobbit',
//  key     value
    rings: 1,
    cloak: true
}
 
console.log(frodo);

/* 
    ARRAYS

        - arrays are containers that hold a list of items
        - arrays are denoted by [] 
*/

let burritos = ['large', 4, true];
console.log(burritos);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Brandon";
let lastName = "Bornkamp";
let houseNumber = 2925;
let aptNumber = "--";
let street = "Ford Dr";
let city = "Fort Wayne";
let state = "Indiana";
let zipcode = 46818;
console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);

