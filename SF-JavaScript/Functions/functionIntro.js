function hello(){
    alert('Hello JS Functions!');
}

function sumOfArray(myarray){
    let sum = 0
    for(let i=0; i<myarray.length; i++){
        sum += myarray[i];
    }
    console.log(`Sum of array elements = ${sum}`);
}

sumOfArray([1,2,3,4,5]);
sumOfArray(["Red", "Green", "Blue"]);

