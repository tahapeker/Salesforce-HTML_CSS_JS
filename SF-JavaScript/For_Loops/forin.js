let employee = {
    name : 'Amit Kumar',
    age : 35,
    department : 'IT',
    salary : 30000
}

let myarray = [100, 200, 300, 400];

for(let temp in employee){
   console.log(temp + ' = '+employee[temp]);
}

for(let temp2 in myarray){
    console.log(temp2 + ' = '+myarray[temp2]);
}