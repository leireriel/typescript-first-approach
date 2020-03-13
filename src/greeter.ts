// #### 3. Classes ####
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
};

interface Person {
  firstName: string;
  lastName: string;
};

const greeter3 = (person: Person) => {
  return `Hello ${person.firstName} ${person.lastName}`;
};

let user3 = new Student('Leire', 'A.', 'Rico');



// #### 2. Interfaces ####
interface Person {
  firstName: string;
  lastName: string;
};

const greeter2 = (person: Person) => {
  return `Hello ${person.firstName} ${person.lastName}`;
};

let user2 = { firstName: 'Leire', lastName: 'Rico' };



// #### 1. Type annotations ####
const greeter1 = (person: string) => `Hello, ${person}`;

let user1 = 'Leire Rico';



// #### Render results in DOM ####
const newList = document.createElement('ol');
document.body.appendChild(newList);

const addNewElementToList = ({ exampleName, functionToRender }) => {
  const newItem = document.createElement('li');
  newItem.innerHTML = `Example for <b>${exampleName}</b>: ${functionToRender}`;
  newList.appendChild(newItem);
};

addNewElementToList({
  exampleName: 'Type annotations',
  functionToRender: greeter1(user1)
});
addNewElementToList({
  exampleName: 'Interfaces',
  functionToRender: greeter2(user2)
});
addNewElementToList({
  exampleName: 'Classes',
  functionToRender: greeter3(user3)
});
