let employee = {
    firstName : 'Amit',
    lastName : 'Kumar',
    age : 35,
    department : 'IT',
    salary : 30000,
    fullName : function(){
        return this.firstName +' '+this.lastName;
    },
    netSalary : function(){
        return this.salary - (0.1*this.salary);
    }
}

console.log(employee);

console.log(employee.fullName());
console.log(employee.netSalary());