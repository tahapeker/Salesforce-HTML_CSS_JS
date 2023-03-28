class Student{
    constructor(fName, lName, age, subjects){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.subjects = subjects;
    }
    get fName(){
        return this.firstName;
    }
    get lName(){
        return this.lastName;
    }
    get stAge(){
        return this.age;
    }
    get subs(){
        return this.subjects;
    }
    set fName(fn){
        this.firstName = fn;
    }
}

const obj1 = new Student("Amit", "Kumar", 35, ["Java", "Apex", "JavaScript"]);
const obj2 = new Student("Vugar", "Guliyev", 34, ["JavaScript"]);

obj1.fName = "Sumit";
console.log(obj1.fName);
