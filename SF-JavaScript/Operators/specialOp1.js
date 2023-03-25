let num = 3;

num % 2 == 0 ? console.log('Even') : console.log('Odd');

const student = {
    name : 'Amit Kumar',
    age : 35,
    standard : 'MCA'
};

let prop = "country";

prop in student ? console.log(student[prop]) : console.log(prop+' is not a property');