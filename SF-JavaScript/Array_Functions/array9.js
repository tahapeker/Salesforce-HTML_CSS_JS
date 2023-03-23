// Define an array of numbers
var array1 = [12, 15, 17, 25, 50];
// Define an array of strings
var array2 = ["Red", "Green", "Blue", "Orange"];

// Define a function called 'myfun' that takes two parameters
function myfun(first, second){
    // Output a string that includes the second parameter (index) and first parameter (value)
    console.log(second+' : '+first);
}
// Three Parameters
// First Parameter : Current Value of the array
// Second Parameter : Current index of the array
// Third Parameter (optional) : Array itself

// Here, we're defining the function that will be called for each element in the array.

// Using the 'forEach' method to call the 'myfun' function for each element in the 'array1'
// The 'myfun' function will be passed three parameters: the current element value, the current element index, 
// and the array itself (not used here)
array1.forEach(myfun);

// Using the 'forEach' method to call the 'myfun' function for each element in the 'array2'
// The 'myfun' function will be passed three parameters: the current element value, the current element index, 
// and the array itself (not used here)
array2.forEach(myfun);


// Define a function called 'tenTimes' that takes three parameters
function tenTimes(item, i, a){
    
    // Multiply the 'item' (current element value) by 10 and replace it in the array 'a' (array1)
    a[i] = item * 10;
}

// Here, we're defining the function that will be called for each element in the array.

// Using the 'forEach' method to call the 'tenTimes' function for each element in the 'array1'
array1.forEach(tenTimes);

// Output the modified array
console.log(array1);





/*
This code demonstrates the use of the forEach() method to iterate over arrays and execute a function on each element.

The first part of the code defines two arrays array1 and array2.

The myfun function takes two parameters first and second and logs the second parameter followed by the first parameter to the console.

array1.forEach(myfun); executes myfun on each element of array1 passing the current element value as the first parameter and the current index as the second parameter. Similarly, array2.forEach(myfun); executes myfun on each element of array2.

The tenTimes function takes three parameters item, i, and a representing the current element value, the current index, and the array itself, respectively. It multiplies the current element by 10 and assigns it back to the array at the current index. array1.forEach(tenTimes); executes tenTimes on each element of array1, multiplying each element by 10.

The final console.log(array1); statement logs the updated array1 with each element multiplied by 10.
*/