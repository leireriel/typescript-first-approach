// #### 3. Classes ####
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
;
;
var greeter3 = function (person) {
    return "3. Hello " + person.firstName + " " + person.lastName;
};
var user3 = new Student('Leire', 'A.', 'Rico');
document.body.textContent = greeter3(user3);
;
var greeter2 = function (person) {
    return "2. Hello " + person.firstName + " " + person.lastName;
};
var user2 = { firstName: 'Leire', lastName: 'Rico' };
document.body.textContent = greeter2(user2);
// #### 1. Type annotations ####
var greeter1 = function (person) { return "1. Hello, " + person; };
var user1 = 'Leire Rico';
document.body.textContent = greeter1(user1);
