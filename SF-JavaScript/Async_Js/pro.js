function show(val){
    const divElement = document.getElementById("mydiv");
    divElement.innerHTML = val;
}

let myResult = new Promise(function(resolve, reject){
    let x = 5;
    if(x > 0){
        resolve("Greater than 0");
    }
    else {
        reject("Less than or equal to 0");
    }
});

myResult.then(
    function(value) {show(value);},
    function(error) {console.log(error);}
);