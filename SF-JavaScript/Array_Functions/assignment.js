// Create a JS file where you will have an array of String (name of friends)
// and create a new array with only those names which starts with alphabet 'A'

var friends = ["Amit", "Farid", "Ayshan","Rashid", "Elbrus"];

function nameFilter(name){
    return Array.from(name)[0] == 'A';
    // return name.charAt(0) == "A";
}

var newArray = friends.filter(nameFilter);

console.log(newArray);

console.log(Array.from("Amit"));

