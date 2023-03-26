const student = {
    firstName : "Amit",
    lastName : "Kumar",
    display : function(){
        console.log("First Name : "+this.firstName);
        console.log("Last Name : "+this.lastName);
    }
}

const stu1 = {
    firstName : "Vugar",
    lastName : "Guliyev"
}

const stu2 = {
    firstName : "Elbrus",
    lastName : "Aghazada"
}

student.display.apply(stu1);
student.display.apply(stu2);