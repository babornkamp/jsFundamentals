/*
    RETURN

        - the return keyword allows us to return a variable or value that is local to the scope of a function, and access that variable or value within the global scope of the document.

        - there can only be a single return from a function
*/

// FUNCTION DECLARATION

function myName(fName) {
    // console.log(fName);

    return(fName); // parens can or can't be included and it will still return the value
    // return fName;
}

//myName('Zach');

// when we return a value from a function, we need to assign the call of our function to a variable to capture the return value from the function

// let myNameIs = 'Zach'
let myNameIs = myName('Zach'); // when this line of code is read, the function will run before anything else. Since we're returning a value from that function, our return value is the value that will be assigned to our variable of myNameIs
console.log(myNameIs);

function hello() {
    let a = 'A';
    let b = 'B';
    let c = 'C';

    let ABC = `The first three letters of the alphabet are ${a}, ${b}, and ${c}`;

    return ABC;
}

let string = hello();
console.log(string);



// BLOCK BODY ARROW FUNCTION

let myName = fName => {
    return fName;
}

let myNameIs = myName('Brandon');
console.log(myNameIs);

// CONCISE BODY ARROW FUNCTION

let name = lName => lName; //return keyword not needed in the case of a concise body arrow function. it happens be default

let captureReturn = name('Bornkamp');
console.log(captureReturn);