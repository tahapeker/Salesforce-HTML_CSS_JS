class Student{
    constructor(fName, lName, age, subjects){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.subjects = subjects;
    }
    fullName = () => this.firstName+" "+this.lastName
    display(){
        console.log('First Name : '+this.firstName);
        console.log('Last Name : '+this.lastName);
        console.log('Age : '+this.age+' years');
        console.log('Subjects : '+this.subjects);
    }
}

const obj1 = new Student("Amit", "Kumar", 35, ["Java", "Apex", "JavaScript"]);
// const obj2 = new Student("Vugar", "Guliyev", 34, ["JavaScript"]);

console.log(obj1.fullName());
obj1.display();