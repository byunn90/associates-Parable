const Engineer = require("../lib/Engineer");

// import works Tested it works
describe("Engineer", () => {
  describe("Testing the properties of Engineer class and arugments", () => {
    it("Must have the correct properties the input argument name", () => {
      const name = "Mihar";
      const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
      expect(engineer.name).toBe(name);
    });
  });

  it("must have the same propties as ID", () => {
    const id = 2244;
    const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
    expect(engineer.id).toBe(id);
  });

  it("must have the same properties as email", () => {
    const email = "mihar@hotmail.com";
    const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
    expect(engineer.email).toBe(email);
  });
  it("Testing the input GetName() seeing if we get the same name as instance object that is created ", () => {
    const name = `My name: Mihar`;
    const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
    expect(engineer.getName()).toBe(name);
    // Worked!!!
  });
  it("Testing the input getID() seeing if we get the same name as instance object that was created", () => {
    const idNumber = 2244;
    const id = `My ID: ${idNumber}`;
    const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
    expect(engineer.getId()).toBe(id);
  });
  it("Testing the input getID() seeing if we get the same ID as the arguement that was passed into the instance that was created", () => {
    const email = "My email: mihar@hotmail.com";
    const engineer = new Engineer("Mihar", 2244, "mihar@hotmail.com");
    expect(engineer.getEmail()).toBe(email);
  });
});
