/////////////////////////////
//  Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) { /* Name of the function constructor starts with a capital letter as per convention */                                                      
    this.name = name;
    this.yearOfBirth = yearOfBirth;                                                            
    this.job = job;
}

Person.prototype.calculateAge  = function() { //Prototypes can be used to give new properties or methods at a later stage.
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();/*This property is not john's own property . This property was inherited from Person. You can check this using hasOwnProperty() */
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
/*Doubts : if we change a prototype , only new object will get affected or both old and new objects will get affected?
  
*/Array has many prototype properties and methods predefined in it like length, pop, push, shift, unshift etc
