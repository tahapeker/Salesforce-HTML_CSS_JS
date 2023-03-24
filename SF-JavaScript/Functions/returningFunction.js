function sum(param1, param2){
    return param1 + param2;
}

function fullName(objValue){
    return objValue.firstName + " " + objValue.lastName;
}

console.log(sum(10, 20));

var obj = {
    firstName : "Farid",
    lastName : "Ordiyev"
};

console.log(fullName(obj));