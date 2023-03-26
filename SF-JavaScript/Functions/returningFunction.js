// Define a function called 'sum' that takes two parameters 'param1' and 'param2'
function sum(param1, param2){
    // Add 'param1' and 'param2' together and return the result
    return param1 + param2;
}

// Define a function called 'fullName' that takes one parameter 'objValue'
function fullName(objValue){
    return objValue.firstName + " " + objValue.lastName;
}

// Call the 'sum' function with the arguments 10 and 20, and output the result
console.log(sum(10, 20));

// Create an object called 'obj' with 'firstName' and 'lastName' properties
var obj = {
    firstName : "Farid",
    lastName : "Ordiyev"
};

// Call the 'fullName' function with the 'obj' object as the argument, and output the full name
console.log(fullName(obj));