// Define a new array with five elements
var array1 = [10, 20, 30, 40, 50];
//             0   1   2   3   4 
// Here we're labeling the indices for each element in the array

// Using the 'copyWithin' method to copy the elements from index 4 to the end
// And paste them starting at index 2
array1.copyWithin(2, 4);
// So now the array will look like this: [10, 20, 50, 40, 50]

// Output the modified array1 to the console.
console.log(array1);

// Define a new array with five elements
var array2 = [1, 2, 3, 4, 5];

// Using the 'copyWithin' method to copy the elements from index 2 to the end
// And paste them starting at index 3
array2.copyWithin(3, 2);
// So now the array will look like this: [1, 2, 3, 3, 4]

// Output the modified array2 to the console.
console.log(array2);

// target, start, end(optional)
// It will start pasting at the 'target' index
// It will take the content from the 'start' index
// end = Number of elements to copy


// Define a new array with five string elements
var array3 = ["Ayshan", "Nigar", "Rashid", "Vugar", "Nurana"];
// Indices:     0          1         2        3        4



// Using the 'copyWithin' method to copy the element at index 0
// And paste it starting at index 2
// Only one element is being copied
array3.copyWithin(2, 0, 1);
// So now the array will look like this: ["Ayshan", "Nigar", "Ayshan", "Vugar", "Nurana"]

// Output the modified array
console.log(array3);