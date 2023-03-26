var var1 = 25;      // `var1` is assigned the numerical value of 25.
var var2 = "25";    // `var2` is assigned the string value of "25".
var var3 = -25;     // `var3` is assigned the numerical value of -25.

console.log(var1 == var2);      // This is the equality operator, 
                                // which compares two values and returns `true` if they are equal, and `false` otherwise. 
                                // Since `var1` and `var2` have the same value, this comparison returns `true`.

console.log(var1 === var2);     // This is the strict equality operator, 
                                // which also compares two values for equality, 
                                // but unlike the equality operator, it checks the types of the values as well. 
                                // Since `var1` is a number and `var2` is a string, this comparison returns `false`.

console.log(var1 != var2);      // This is the inequality operator, 
                                // which checks if two values are not equal. 
                                // Since `var1` and `var2` have the same value, this comparison returns `false`.

console.log(var1 !== var2);     // This is the strict inequality operator, 
                                // which checks if two values are not equal and not of the same type. 
                                // Since `var1` is a number and `var2` is a string, this comparison returns `true`.

