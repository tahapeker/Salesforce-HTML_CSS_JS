// create an array of strings
var array3 = ["Ayshan", "Nigar", "Rashid", "Vugar", "Nurana"];
        //     0          1         2        3        4

// create an iterator object for the array using the entries() method
var arEntries = array3.entries();

// iterate over the array using the iterator object
for(var x of arEntries){
    console.log(x);
}

// create an array of strings
var arr = ["Apple", "Orange", "Grapes", "Banana"];
        //     0         1        2         3
arr.fill("Pine Apple", 1, 3);
// element
// start Index
// endIndex - 1

console.log(arr);

// find the index of "Banana"
console.log(arr.indexOf("Banana"));

// find the index of "Pine Apple"
console.log(arr.indexOf("Pine Apple"));

// find the last index of "Pine Apple"
console.log(arr.lastIndexOf("Pine Apple"));

// create an object
var student = {
        RollNo : 25,
        Name : 'Amit'
};

// check if arr is an array
console.log(Array.isArray(arr));

// check if student is an array
console.log(Array.isArray(student));