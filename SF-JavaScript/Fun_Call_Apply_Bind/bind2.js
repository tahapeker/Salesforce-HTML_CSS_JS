const student = {
    firstName : "Amit",
    lastName : "Kumar",
    fullName : function(){
        let message =  this.firstName+ " " +this.lastName;
        document.getElementById("mydiv").innerHTML = message;
    }
}

const display = student.fullName.bind(student);

setTimeout(display, 3000);