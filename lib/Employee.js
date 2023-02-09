class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(``);
  }
  getID() {
    console.log(``);
  }
  getEmail() {
    console.log(``);
  }
  getRole() {
    console.log(``);
  }
}

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getGithub() {}

  getRole() {}
}

module.exports = Manager;
module.exports = Employee;
