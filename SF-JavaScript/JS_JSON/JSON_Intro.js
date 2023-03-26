var employees = [
    {firstName : "Amit", lastName : "Kumar", age : 35},
    {firstName : "Sumit", lastName : "Kumar", age : 36},
    {firstName : "Farid", lastName : "Ordiyev", age : 35}
];

console.log(employees);

var jsonString = `{
    "employees" : [
    {"firstName" : "Amit", "lastName" : "Kumar", "age" : 35},
    {"firstName" : "Sumit", "lastName" : "Kumar", "age" : 36},
    {"firstName" : "Farid", "lastName" : "Ordiyev", "age" : 35}
]
}`;

console.log(jsonString);


/*
1. An array of employee objects is defined, with each object containing a first name, last name, and age.
2. The array is logged to the console using console.log().
3. A JSON string is defined as a multiline string, using double quotes to surround property names and values.
4. The JSON string is logged to the console using console.log().
*/