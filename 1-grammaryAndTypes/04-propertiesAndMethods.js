/*
    PROPERTIES AND METHODS

    - in most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with. Using a method causes something to happen to the data, while using a property returns information about the data
    
    - .property and .methods()
        - methods have parens () behind them, properties do not
*/

// STRING PROPERTIES

// Length
let myName = 'Brandon';
console.log(myName.length);

// STRING METHODS
let myDogsName = 'Louie';
console.log(myDogsName.toUpperCase()); //change a string to uppercase

let home = 'My home is Fort Wayne';
console.log(home.includes('Fort Wayne'));

// challenge: use google, find MDN documentation for string methods. Research the string '.split()' method and use and implement it to get an array back from a string.

let sent = 'This sentence will be split into individual parts';
console.log(sent.split('')); //split at each individual character
console.log(sent.split(' ')); //split at each space in the original string
console.log(sent.split(',')); //split at the comma

const words = sent.split(' ');
console.log(words[3]);

const chars = sent.split('');
console.log(chars[8]);

const sentCopy = sent.split();
console.log(sentCopy);



