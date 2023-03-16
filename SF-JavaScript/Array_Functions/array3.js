var array1 = [10, 20, 30, 40, 50];
//   0   1   2   3   4 
array1.copyWithin(2, 4);

console.log(array1);

var array2 = [1, 2, 3, 4, 5];

array2.copyWithin(3, 2);

console.log(array2);

// target, start, end(optional)
// It will start pasting at the 'target' index
// It will take the content from the 'start' index
// end = Number of elements to copy

var array3 = ["Ayshan", "Nigar", "Rashid", "Vugar", "Nurana"];
        //     0          1         2        3        4
array3.copyWithin(2, 0, 1);
console.log(array3);