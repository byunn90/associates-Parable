const Intern = require("../lib/Intern");
describe("Itern", () => {
  it("Must have the correct properties and method name", () => {
    const myName = "Kayhan";
    const intern = new Intern(
      "Kayhan",
      2255,
      "kayhanturk90@live.com",
      "Monash"
    );
    expect(intern.name).toBe(myName);
  });
  it("Must have the correct properties as method ID", () => {
    const myID = 2255;
    const intern = new Intern(
      "Kayhan",
      2255,
      "kayhanturk90@live.com",
      "Monash"
    );
    expect(intern.id).toBe(myID);
  });
  it("Must have the correct properties and method email address", () => {
    const email = "kayhanturk90@live.com";
    const intern = new Intern(
      "Kayhan",
      2255,
      "kayhanturk90@live.com",
      "Monash"
    );
    expect(intern.email).toBe(email);
  });
  it("Must have the correct properties and method of school", () => {
    const school = "Monash";
    const intern = new Intern(
      "Kayhan",
      2255,
      "kayhanturk90@live.com",
      "Monash"
    );
    expect(intern.school).toBe(school);
  });
});
// Tested and it works
