const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should have the correct properties and methods NAME", () => {
    const myName = "Kayhan";
    const manager = new Manager(
      "Kayhan",
      12345,
      "kayhanturk90@Live.com",
      98989
    );
    expect(manager.name).toBe(myName);
  });
  it("should have the correct properties and methods ID", () => {
    const myID = 12345;
    const manager = new Manager(
      "Kayhan",
      12345,
      "kayhanturk90@Live.com",
      98989
    );
    expect(manager.id).toBe(myID);
  });
  it("Must have the correct properties and method as email", () => {
    const emailAdress = "kayhanturk90@Live.com";
    const manager = new Manager(
      "Kayhan",
      12345,
      "kayhanturk90@Live.com",
      98989
    );
    expect(manager.email).toBe(emailAdress);
  });
  it("Must have the correct properties and method as email", () => {
    const officeNumber = 98989;
    const manager = new Manager(
      "Kayhan",
      12345,
      "kayhanturk90@Live.com",
      98989
    );
    expect(manager.officeNumber).toBe(officeNumber);
  });
});
// Worked and tested
