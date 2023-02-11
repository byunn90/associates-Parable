class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getName() {
    return `My name:${this.name}`;
  }
  getId() {
    return `My ID:${this.id}`;
  }
  getEmail() {
    return `My email: ${this.email}`;
  }
  getRole() {
    return "Employee";
  }
}
// Tests
const company = new Employee(29292, "Deano", "Deano@hotmail.com");
console.log(company);
console.log(company.getName());
console.log(company.getId());
console.log(company.getEmail());
console.log(company.getRole());
// Worked!
module.exports = Employee;
