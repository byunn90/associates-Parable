const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
// Tests if code works
// const employees = new Employee(
//   "Kayhan",
//   "12345",
//   "kayhanturk90@Live.com",
//   "12345"
// );

// const managerTitle = new Manager(
//   "kayhan",
//   1234,
//   "kayhanturk90@live.com",
//   1291922222
// );

console.log(managerTitle);
