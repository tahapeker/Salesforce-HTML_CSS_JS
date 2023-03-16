var array1 = [12, 15, 17, 25, 50];
var array2 = ["Red", "Green", "Blue", "Orange"];

function myfun(first, second){
    console.log(second+' : '+first);
}
// Three Parameters
// First Parameter : Current Value of the array
// Second Parameter : Current index of the array
// Third Parameter (optional) : Array itself
array1.forEach(myfun);
array2.forEach(myfun);



function tenTimes(item, i, a){
    a[i] = item * 10;
}
array1.forEach(tenTimes);

console.log(array1);

