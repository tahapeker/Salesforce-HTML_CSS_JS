// Create a JS file where you will have an array of String (name of friends)
// and create a new array with only those names which starts with alphabet 'A'

// Define an array of strings with the names of friends
var friends = ["Amit", "Farid", "Ayshan", "Rashid", "Elbrus"];

// Define a function called 'nameFilter' that takes one parameter 'name'
function nameFilter(name) {
    // Convert the 'name' string to an array of characters using the 'Array.from' method
    // Check if the first character of the array is 'A'
    // Return true if the first character is 'A', false otherwise
    return Array.from(name)[0] == 'A';
    // return name.charAt(0) == "A";
}

// Here, we're defining the function that will be used to filter the 'friends' array.

// Using the 'filter' method to create a new array with only those names from the 'friends' array
// that satisfy the condition of the 'nameFilter' function (i.e., names that start with 'A')
var newArray = friends.filter(nameFilter);

// Output the new filtered array
console.log(newArray);

// Output the array created from the string "Amit" using the 'Array.from' method
console.log(Array.from("Amit"));






/*
This code demonstrates the use of the Array.filter() method to filter the elements of an array based on a given condition.

1. An array friends is declared and initialized with some values.
2. The nameFilter function is defined, which takes a name as input, 
converts it to an array using the Array.from() method, and checks if the first letter of the name is 'A'.
3. The Array.filter() method is called on the friends array and 
passed the nameFilter function as an argument. This filters out all the elements that 
do not satisfy the condition specified by the nameFilter function.
4. The filtered array is stored in a new variable newArray.
5. The console.log() method is used to print the newArray variable to the console, 
which contains only the names that start with the letter 'A'.
6. The console.log() method is used to print the array obtained by using 
the Array.from() method on the string "Amit" to the console, which converts the string to an array.
*/