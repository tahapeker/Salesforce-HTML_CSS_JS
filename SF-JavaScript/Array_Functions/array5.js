var arr = [10, 2, 30, 47, 50];

var arEntries = arr.entries();
var arKeys = arr.keys();

for(var x of arEntries){
    console.log(x);
}

for(var x of arKeys){
    console.log(x);
}


console.log('Length of array = '+arr.length);