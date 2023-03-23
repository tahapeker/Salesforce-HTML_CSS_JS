// Define an array of marks
var marks = [45, 56, 75, 86, 77, 50, 49];

// Define a function to check if a mark is greater than 50
function isPassed(m){
return m > 50;
}

// Use the 'every' method to check if all marks in the array pass the condition in the 'isPassed' function
console.log(marks.every(isPassed));

// Use the 'filter' method to create a new array with only the marks that pass the condition in the 'isPassed' function
var passedMarks = marks.filter(isPassed);

// Log the original marks array and the passedMarks array to the console
console.log(marks);
console.log(passedMarks);