// Define an array of numbers
let array1 = [100, 200, 300, 400];

// Using the 'splice' method to remove 2 elements starting at index 2 (i.e., 300 and 400)
// Then add the numbers 500 and 600 to the array at the same index where the elements were removed (i.e., index 2)
array1.splice(2, 2, 500, 600);
// So now the array will look like this: [100, 200, 500, 600]

// Output the modified array
console.log(array1);





/*
This code creates an array called array1 with four elements: 100, 200, 300, and 400.

The splice method is then called on array1 with four arguments:

1. The starting index to modify (2 in this case, which corresponds to the third element of the array).
2. The number of elements to remove from the array starting at the 
specified index (2 in this case, which corresponds to the third and fourth elements of the array).
3. The first element to add to the array (500 in this case).
4. The second element to add to the array (600 in this case).
5. The splice method modifies the original array1 by removing two elements 
starting at index 2 and adding 500 and 600 in their place. The resulting array 
is [100, 200, 500, 600], which is then printed to the console.
*/