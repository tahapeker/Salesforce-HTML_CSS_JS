// Define an array of numbers
var array = [12, 15, 17, 25, 50];

// Define a function that returns true if the passed value is greater than 25
function greaterThan(num){
return num > 25;
}

// Use the findIndex() method to return the index of the first element that satisfies the greaterThan function
console.log(array.findIndex(greaterThan));      // Output: 4

// Use the find() method to return the first element that satisfies the greaterThan function
console.log(array.find(greaterThan));           // Output: 50