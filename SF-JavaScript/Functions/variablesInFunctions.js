var var1 = 10; // outer variable

function show(){
    var var2 = 20;          // local variable
    {
        var var3 = 30;
        console.log(var1+', '+var2+', '+var3);
    }
    console.log(var1+', '+var2+', '+var3);
}

show();
console.log(var1);
console.log(var2);
console.log(var3);