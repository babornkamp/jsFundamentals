/* 

    - falsy values: a falsy value is a vlue that is considered false when encountered in a boolean context (boolean is datatype that can only be true or false)

        - there are six cases of falsy values in javascript:
            1. false
            2. 0
            3. "",' ', 
            4. null
            5. undefined
            6. NaN (not a numer)

*/

let isOn = true;

// Read as, if the variable "isOn" is EQUAL to true, run the body
if (isOn == true) {
    console.log('The light is on!');
}

// Read as, if "isOn" is true, run the body
if (isOn) {
    console.log('The light in still on');
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off now');
}

let weather = 65;

if (weather < 70) {
    console.log("Wear a jacket!");
}

