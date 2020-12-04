// EQUAL
'3' == 3;
console.log('3' == 3);

/*
    - coercion is the process of coverting a value from one type to another
    - in the above example, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3, even though one of our values is a string.
*/

// STRICT EQUAL - this overrides javascript coercion
console.log(3 === 3); // true
console.log('3' === 3); // false

// NOT EQUAL
console.log('3' != 3);

// STRICT NOT EQUAL
console.log('3' !== 3); 
console.log(4 !== 5);