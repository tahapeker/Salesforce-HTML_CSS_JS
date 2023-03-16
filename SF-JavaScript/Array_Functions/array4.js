var array3 = ["Ayshan", "Nigar", "Rashid", "Vugar", "Nurana"];
        //     0          1         2        3        4
var arEntries = array3.entries();

for(var x of arEntries){
    console.log(x);
}

var arr = ["Apple", "Orange", "Grapes", "Banana"];
        //     0         1        2         3
arr.fill("Pine Apple", 1, 3);
// element
// start Index
// endIndex - 1

console.log(arr);

console.log(arr.indexOf("Banana"));
console.log(arr.indexOf("Pine Apple"));
console.log(arr.lastIndexOf("Pine Apple"));

var student = {
        RollNo : 25,
        Name : 'Amit'
};

console.log(Array.isArray(arr));
console.log(Array.isArray(student));