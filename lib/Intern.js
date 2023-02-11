const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Your Role:Intern";
  }
}
// Tests if code works
const InternJob = new Intern(
  "Deano",
  969696,
  "Deano@hotmail.com",
  "Monash university"
);
// Testing seeing if it works
console.log(InternJob);
console.log(InternJob.getRole());
console.log(InternJob.getSchool());
// Worked
module.exports = Intern;
