class Entity {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class User extends Entity {
  constructor(firstName, lastName, age) {
    super(firstName, lastName);
    this.age = age;
  }
  getUser() {
    return `${this.getFullName()}, ${this.age} years old`;
  }
}

class Box extends User {
  constructor(firstName, lastName, age, nationality) {
    super(firstName, lastName, age);
    this.nationality = nationality;
  }
  getNationality() {
    return `${this.getUser()}, ${this.nationality}`;
  }
}

class Stuff extends Box {
  constructor(firstName, lastName, age, nationality, stuff) {
    super(firstName, lastName, age, nationality);
    this.stuff = stuff;
  }
  getHobbies() {
    return this.stuff === 'AK-47'
      ? `studies the device of the ${this.stuff}`
      : `learns ${this.stuff}`;
  }
  getFullInfo() {
    console.log(`${this.getNationality()}, ${this.getHobbies()}`);
  }
}

const newUser1 = new Stuff('Ivan', 'Ivanov', 17, 'belarusian', 'English');
const newUser2 = new Stuff('Khalid', 'Al-Falih', 15, 'arab', 'AK-47');
newUser1.getFullInfo();
newUser2.getFullInfo();
