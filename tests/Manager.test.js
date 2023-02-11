const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should have the correct properties and methods", () => {
    const manager = new Manager(
      "Kayhan",
      12345,
      "kayhanturk90@Live.com",
      98989
    );
    expect(manager.name).toBe("Kayhan");
    expect(manager.id).toBe(12345);
    expect(manager.email).toBe("kayhanturk90@Live.com");
    expect(manager.officeNumber).toBe(98989);
  });
});
// expect(manager.id).toBe(id);
// expect(manager.email).toBe(email);
// expect(manager.name).toBe(myName);
// expect(manager.officeNumber).tobe(office);
// expect(manager.id).toBe(12345);
// expect(manager.email).toBe("kayhanturk90@Live.com");
// expect(manager.officeNumber).toBe(98989);
