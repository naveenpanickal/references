/////////////////////////////
// Lecture: Primitives vs objects
/*//Variables containing primitives holds the data in the variable itself
//while variables holding objects would rather points to the memory location of the object.
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//Eventhough we only changed the value of obj1.name, val of obj2.name also changes bcos both are pointing to same object 
console.log(obj2.age);

