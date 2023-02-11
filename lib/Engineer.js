const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Your Role is:Engineer";
  }
}
// Tests checking if it works
const engineerWorker = new Engineer(
  "Deano",
  1229292,
  "Deano@hotmail.com",
  "byunn90"
);
// Worked!
console.log(engineerWorker);
console.log(engineerWorker.getGithub());
console.log(engineerWorker.getRole());

module.exports = Engineer;
