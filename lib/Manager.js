class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getGithub() {}

  getRole() {}
}

module.exports = Manager;
