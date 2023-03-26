// Define a JavaScript object with the key-value pairs for the manager
var manager = {
    name : "Sahil Ibrahimli",
    department : "IT",
    subOrdinates : [
        {firstName : "Amit", lastName : "Kumar", age : 35},
        {firstName : "Sumit", lastName : "Kumar", age : 36},
        {firstName : "Farid", lastName : "Ordiyev", age : 35}
    ]
}

// Use JSON.stringify() to convert the object to a JSON string and store it in a variable
var JSONString = JSON.stringify(manager);

// Output the original object and the resulting JSON string
console.log(manager);
console.log(JSONString);