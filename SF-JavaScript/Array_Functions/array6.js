// Create an array with fruits
var fruits = ["Apple", "Banana", "Orange", "Grapes"];

// Check if 'Banana' is included in the array
console.log(fruits.includes("Banana"));

// Check if 'Pine Apple' is included in the array
console.log(fruits.includes("Pine Apple"));

// Check if 'Banana' is included in the array starting from index 2
console.log(fruits.includes("Banana", 2));

// Create an array from a string of numbers
var array = Array.from("123456789");

// Log the created array
console.log(array);