function show(val){
    const divElement = document.getElementById("mydiv");
    divElement.innerHTML = val;
}

// reference of show function will be captured by cbFun
// cbFun is the callback function
function calculate(num1, num2, cbFun){
    let result = num1 + num2;
    cbFun(result);
}

// passing show function as parameter to calculate function
calculate(10, 20, show);