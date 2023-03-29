const myarray = [10.5, 2, -5, -2.5, 0, 15];

function generate(arr, callback){
    const newarr = [];
    for(item of arr){
        if(callback(item)){
            newarr.push(item);
        }
    }
    return newarr;
}

const newarray = generate(myarray, (x) => x >= 0);

console.log(myarray);
console.log(newarray);