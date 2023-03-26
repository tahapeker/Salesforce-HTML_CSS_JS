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

student.display.bind(stu1)();
student.display.bind(stu2)();

// const stu1Display = student.display.bind(stu1);
// const stu2Display = student.display.bind(stu2);

// stu1Display();
// stu2Display();