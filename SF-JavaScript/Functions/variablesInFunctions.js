// Define a variable called 'var1' with a value of 10 in the global scope
var var1 = 10; // outer variable

// Define a function called 'show'
function show(){

    // Define a variable called 'var2' with a value of 20 in the local scope of the 'show' function
    var var2 = 20;          // local variable
    {
        // Define a variable called 'var3' with a value of 30 in a nested block scope within the 'show' function
        var var3 = 30;
        // Output the values of 'var1', 'var2', and 'var3' to the console
        console.log(var1 + ', ' + var2 + ', ' + var3);
    }
    // Attempt to output the value of 'var3' to the console outside of the nested block scope, which will result in an error because 'var3' is not defined in this scope
    console.log(var1 + ', ' + var2 + ', ' + var3);
}

// Call the 'show' function, which will output the values of 'var1', 'var2', and 'var3' to the console within the nested block scope, 
// and attempt to output the value of 'var3' outside of the nested block scope, which will result in an error
show();

// Output the value of 'var1' to the console in the global scope
console.log(var1);

// Attempt to output the values of 'var2' and 'var3' to the console outside of their respective scopes, 
// which will result in errors because neither variable is defined in this scope
console.log(var2);
console.log(var3);