let array1 = [100, 200, 300, 400];
let array2 = [100, 200, 300, 400];

console.log(array1.splice(2));
//removes the element from the specified position and returns it
//even works for negative value one time
console.log(array1);

console.log(array2.slice(1,3));
//take out a specific section of an array and return it
//from startIndex till endIndex-1
//actual array is not changed 
console.log(array2);


let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];

console.log(a2.concat(a1));
// concatenates two different arrays and return
// original arrays will not change 
console.log(a1);
console.log(a2);