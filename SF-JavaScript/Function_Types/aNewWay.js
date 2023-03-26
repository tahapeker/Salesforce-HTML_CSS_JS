function outerFun(){
    function innerFun(){
        console.log('Hello Inner Function');
    }
    return innerFun;
}

let myfun = outerFun(); // will return the inner function
// assigning the returning inner function to a variable

myfun();
// when this variable will be called as a function
// it will call the function which it is holding right now

// functions as parameters to other functions
// var arr = [10, 20, 30];
// function myfun(){

// }
// arr.forEach(myfun);

// function returned from another function