function tenTimes(item){
    return item * 10;
}

function multiplier(item, index){
    return item * index;
}

var myarray = [4, 9, 25, 36, 49];

var newarray1 = myarray.map(Math.sqrt);
// Item
// index
// array

var newarray2 = myarray.map(tenTimes);
var newarray3 = myarray.map(multiplier);

console.log(myarray);
console.log(newarray1);
console.log(newarray2);
console.log(newarray3);

