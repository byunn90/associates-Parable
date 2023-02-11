class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getName() {
    return console.log(`My name:${this.name}`);
  }
  getId() {
    return console.log(`My ID:${this.id}`);
  }
  getEmail() {
    return console.log(`My email: ${this.email}`);
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
console.log(Employee.email);
