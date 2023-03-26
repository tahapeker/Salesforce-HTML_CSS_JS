
const arraySum = (myarray) => {
    if(Array.isArray(myarray)){
        let sum = 0;
        for(let temp of myarray){
            if(typeof temp == 'number'){
                sum += temp;
            }
        }
        return sum;
    }
    else{
        return 'Error: Parameter passed is not an array!';
    }
}


console.log(arraySum([10, 20, 30, 40, 50]));
console.log(arraySum([10, 20, 30, 40, "Amit"]));
console.log(arraySum(10));
console.log(arraySum("10"));