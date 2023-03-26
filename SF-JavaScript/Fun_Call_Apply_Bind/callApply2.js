const student = {
    firstName : "Amit",
    lastName : "Kumar",
    display : function(age, subject){
        console.log("First Name : "+this.firstName);
        console.log("Last Name : "+this.lastName);
        console.log("Age : "+age);
        console.log("subject : "+subject);
    }
}
const stu1 = {
    firstName : "Vugar",
    lastName : "Guliyev",
    age : 35,
    subject : 'JS'
}
const stu2 = {
    firstName : "Elbrus",
    lastName : "Aghazada",
    age : 34,
    subject : 'Apex'
}

student.display.call(stu1, stu1.age, stu1.subject);
student.display.call(stu2, stu2.age, stu2.subject);

student.display.apply(stu1, [stu1.age, stu1.subject]);
student.display.apply(stu2, [stu2.age, stu2.subject]);