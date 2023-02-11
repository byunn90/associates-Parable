const Employee = require("../lib/Employee");

describe("Employee details", () => {
  describe("Get name", () => {
    it("Must have the correct properties and method NAME", () => {
      const newEmployeeName = "john";
      const employee = new Employee("john", 2245, "John@hotmail.com");
      expect(employee.name).toBe(newEmployeeName);
    });
    it("Must have the correct properties and method ID", () => {
      const id = 2245;
      const employee = new Employee("john", 2245, "John@hotmail.com");
      expect(employee.id).toBe(id);
    });
  });
  it("Must have the same properties as the method email address", () => {
    const email = "John@hotmail.com";
    const employee = new Employee("john", 2445, "John@hotmail.com");
    expect(employee.email).toBe(email);
  });
});
// TESTED and it works
