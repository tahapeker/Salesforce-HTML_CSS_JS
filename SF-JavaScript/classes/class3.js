class Parent{
    constructor(a){
        this.a = a;
    }
    show(){
        console.log('PARENT A = '+this.a);
    }
}

class Child1 extends Parent{
    constructor(num1, num2){
        super(num1);
        this.b = num2;
    }
    show(){
        super.show();
        console.log('CHILD B = '+this.b);
    }
}

const obj = new Child1(10, 20);

obj.show();