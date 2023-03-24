var manager = {
    name : "Sahil Ibrahimli",
    department : "IT",
    subOrdinates : [
        {firstName : "Amit", lastName : "Kumar", age : 35},
        {firstName : "Sumit", lastName : "Kumar", age : 36},
        {firstName : "Farid", lastName : "Ordiyev", age : 35}
    ]
}

var JSONString = JSON.stringify(manager);

console.log(manager);
console.log(JSONString);


