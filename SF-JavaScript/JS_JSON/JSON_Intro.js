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