/* 
    PARAMETERS

        - parameters are placeholders for data that we pass into the function when the function is called
                     
                        (1)
        function hello(name) {
            console.log(`hello ${name}`);
        }                        (2)

                (3)
        hello('Brandon');

        1. this is the parameter that the function is holding. this is just a placeholder
        2. by calling the parameter, it will print the value given to 'name' when the function was called
        3. this is the data that we're passing into the function, and that the parameter 'name' will then hold

        - parameter can be named anything, just like variables
*/

// let name = 'Brandon'
function hello(name) {
    console.log(`hello ${name}`);
}

hello('Brandon'); // when we call the function is where we need to pass in the data that we want to assign to the parameter

// ---------------------

//              ticket = 'cheese pizza'
function brandon(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

brandon('cheese pizza'); // if you have no parameter (or placeholder), then your function will not be able to accept any data

// --------------------------

function counter(number) {
    console.log(number);
}

for (let i = 0; i <= 10; i++) {
    counter(i);
}

// CHALLENGE: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name.

function myFunction(firstName, lastName) {
    console.log(`My full name is ${firstName} ${lastName}`);
}
myFunction('Brandon', 'Bornkamp');

// another way to do it

function fullName(fName, lName) {
    let myFullName = `${fName} ${lName}`;

    console.log(`Hello, my name is ${myFullName}`);
}

fullName('Brandon', 'Bornkamp');
