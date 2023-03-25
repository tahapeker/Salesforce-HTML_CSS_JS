let var1 = new Number(25);
let myarray = new Array(10,20,30);

console.log(typeof var1);
console.log(typeof myarray);

console.log(var1 instanceof Number);
console.log(myarray instanceof Array);

var student = {
    name : 'Amit Kumar',
    age : 35,
    standard : 'MCA'
};

delete student.name;

console.log(student);