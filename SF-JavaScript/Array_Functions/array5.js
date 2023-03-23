// Define an array of numbers
var arr = [10, 2, 30, 47, 50];

// Get an iterator object of key/value pairs using the entries method
var arEntries = arr.entries();

// Get an iterator object for the keys of the array using the keys method
var arKeys = arr.keys();

// Iterate over the key/value pairs using a for...of loop
for(var x of arEntries){
console.log(x);
}

// Iterate over the keys of the array using a for...of loop
for(var x of arKeys){
console.log(x);
}

// Get the length of the array using the length property
console.log('Length of array = ' + arr.length);