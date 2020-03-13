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
    return "Hello " + person.firstName + " " + person.lastName;
};
var user3 = new Student('Leire', 'A.', 'Rico');
;
var greeter2 = function (person) {
    return "Hello " + person.firstName + " " + person.lastName;
};
var user2 = { firstName: 'Leire', lastName: 'Rico' };
// #### 1. Type annotations ####
var greeter1 = function (person) { return "Hello, " + person; };
var user1 = 'Leire Rico';
// #### Render results in DOM ####
var newList = document.createElement('ol');
document.body.appendChild(newList);
var addNewElementToList = function (_a) {
    var exampleName = _a.exampleName, functionToRender = _a.functionToRender;
    var newItem = document.createElement('li');
    newItem.innerHTML = "Example for <b>" + exampleName + "</b>: " + functionToRender;
    newList.appendChild(newItem);
};
addNewElementToList({ exampleName: 'Type annotations', functionToRender: greeter1(user1) });
addNewElementToList({ exampleName: 'Interfaces', functionToRender: greeter2(user2) });
addNewElementToList({ exampleName: 'Classes', functionToRender: greeter3(user3) });
