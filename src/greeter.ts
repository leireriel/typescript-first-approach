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
  return `3. Hello ${person.firstName} ${person.lastName}`;
};

let user3 = new Student('Leire', 'A.', 'Rico');

document.body.textContent = greeter3(user3);



// #### 2. Interfaces ####
interface Person {
  firstName: string;
  lastName: string;
};

const greeter2 = (person: Person) => {
  return `2. Hello ${person.firstName} ${person.lastName}`;
};

let user2 = { firstName: 'Leire', lastName: 'Rico' };

document.body.textContent = greeter2(user2);



// #### 1. Type annotations ####
const greeter1 = (person: string) => `1. Hello, ${person}`;

let user1 = 'Leire Rico';

document.body.textContent = greeter1(user1);
