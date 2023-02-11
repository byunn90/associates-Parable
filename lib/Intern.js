class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
// Tests if code works
const InternJob = new Intern(
  "kayhan",
  969696,
  "kayhanturk90@Live.com",
  "Monash university"
);

console.log(InternJob);
console.log(Intern.getRole);
console.log(Intern.getSchool);

module.exports = Intern;
