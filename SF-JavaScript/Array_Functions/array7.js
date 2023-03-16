var marks = [45, 56, 75, 86, 77, 50, 49];

function isPassed(m){
    return m > 50;
}

//console.log(isPassed(55));
//console.log(isPassed(25));


console.log(marks.every(isPassed));

var passedMarks = marks.filter(isPassed);

console.log(marks);
console.log(passedMarks);