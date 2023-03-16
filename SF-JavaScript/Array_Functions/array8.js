var array = [12, 15, 17, 25, 50];

function greaterThan(num){
    return num > 25;
}

console.log(array.findIndex(greaterThan));
console.log(array.find(greaterThan));

