// Create a string in JSON format and assign it to a variable named `JSONString`.
var JSONString = `{
    "name" : "Sahila Ibrahimli",
    "department" : "IT",
    "subOrdinates" : [
        {"firstName" : "Amit", "lastName" : "Kumar", "age" : 35},
        {"firstName" : "Sumit", "lastName" : "Kumar", "age" : 36},
        {"firstName" : "Farid", "lastName" : "Ordiyev", "age" : 35}
    ]
}`;

// Use the `JSON.parse() method to convert the JSON string into a JavaScript object and assign it to a variable named `manager`.
var manager = JSON.parse(JSONString);

// Use `console.log()` to print the original JSON string and the parsed object to the console.
console.log(JSONString);
console.log(manager);