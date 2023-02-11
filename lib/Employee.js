class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  printInfo() {
    console.log(`This is my id ${this.id} wheels\n
    this is my name: ${this.name}\n
    this is my email: ${this.email}`);
  }
}
module.exports = Employee;
