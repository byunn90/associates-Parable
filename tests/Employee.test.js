const Employee = require("../lib/Employee");

describe("Employee details", () => {
  describe("Get name", () => {
    it("We are getting name", () => {
      const newEmployeeName = "Kayhan";
      Employee.getName() = 'Kayhan'
      expect(Employee.getName()).toBe(newEmployeeName)
    });
  });
});
