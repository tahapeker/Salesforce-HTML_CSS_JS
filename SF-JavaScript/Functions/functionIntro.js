// Define a function called 'hello' that displays an alert message
function hello(){
    alert('Hello JS Functions!');
}

// Define a function called 'sumOfArray' that takes one parameter 'myarray'
function sumOfArray(myarray){
    // Initialize a variable called 'sum' to 0
    let sum = 0
    // Use a 'for' loop to iterate over the 'myarray' parameter
    for(let i=0; i<myarray.length; i++){
        // Add each element in 'myarray' to the 'sum' variable
        sum += myarray[i];
    }
    // Output the sum of all elements in the array
    console.log(`Sum of array elements = ${sum}`);
}

// Call the 'sumOfArray' function with an array of numbers as the argument
sumOfArray([1,2,3,4,5]);
// Call the 'sumOfArray' function with an array of strings as the argument
sumOfArray(["Red", "Green", "Blue"]);

