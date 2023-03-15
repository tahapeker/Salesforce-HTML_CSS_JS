let array = [25, 5, 10, 2, 11];

console.log(array.shift());
// removes the first element and returns it and shifts the rest with 1 position
console.log(array);


console.log(array.unshift(100));
// add the specified value as first element and moves the rest of them 
// and returns the length of array
console.log(array);


console.log(array.pop());
// removes the last element and returns it 
console.log(array);

console.log(array.push(500));
// add the specified value at the last position 
// and returns the length of the array
console.log(array);