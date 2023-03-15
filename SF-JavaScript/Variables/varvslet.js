function myfun(){
    if(10 > 5){
        var a = 10;
        let b = 20;
        console.log('Inside A = '+a);
        console.log('Inside B = '+b);
    }
    console.log('Outside A = '+a);
    console.log('Outside B = '+b);
}
myfun();

// var has the scope of function in which it is defined
// let has the scope of block in which it is defined

// var => function scope
// let => block scope