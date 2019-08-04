/*****************************
* Boolean logic
*/
/*Basic boolean logic:Not, AND, 0R
   1. AND (&&) => true if ALL are true
   2. OR (||)  => TRUE IF one IS TRUE
   3. NOT(!)   => invert true/false value*/
function boolLogic(){
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
}
//boolLogic();
 

