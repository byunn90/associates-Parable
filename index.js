const inquirer = require("inquirer");
const fs = require("fs");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "name",
      message: "Whats is your name?",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",
    },
    {
      type: "list",
      name: "role",
      message: "whats is your role?",
      choices: ["Engineer", "Intern", "Manager"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your github?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office Number?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "school",
      message:
        "What is the name of the school you are attending (Intern only)?",
      when: (answers) => answers.role === "Intern",
    },
  ]);
};

const generateHTML = (users) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
   <header class="header bg-light text-center">
    <h2 class="text-primary p-5">Create your companies roster</h2>
  </header>
  <div class="d-flex justify-content-center">
  ${users.map(({ id, role, name, email, github, school, officeNumber }) => {
    return `<div class="card-group">
    <div class="card mx-4" style="width: 18rem;">
     
      <div class="card-body">
      <h3 class="display-4" style="font-size:15px;">ID: ${id}</h3>
      <h3 class="display-4" style="font-size:15px;">Role: ${role}</h3>
      <h3 class="display-4" style="font-size:15px;">Name: ${name}</h3>
        <ul class="list-group">
          <li class="list-group-item">
            <a href="mailto:${email}" class="text-primary">
              My Email
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://github.com/${github}" class="text-primary">
              My GitHub
            </a>
      <li class="list-group-item" style="${
        role === "Engineer" || role === "Manager" ? "display: none;" : ""
      }">School: ${
      role === "Intern" ? `${school}` : role === "Manager" ? "NA" : "NA"
    }</li> 
        <li class="list-group-item" style="${
          role === "Intern" || role === "Engineer" ? "display: none;" : ""
        }">OfficeNumber: ${
      role === "Manager" ? `${officeNumber}` : role === "Manager" ? "NA" : "NA"
    }</li> 
        </ul>
      </div>
    </div>`;
  })}
  </div>
  </div>
</body>
</html>`;
const newUsers = [];
const addEmployee = () => {
  promptUser()
    .then((user) => {
      newUsers.push(user);
      return inquirer.prompt([
        {
          type: "confirm",
          name: "addMore",
          message: "Do you want to add more employees?",
        },
      ]);
    })
    .then((response) => {
      if (response.addMore) {
        addEmployee();
      } else {
        const html = generateHTML(newUsers);
        fs.writeFile("./dist/index.html", html, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Roster generation complete.");
          }
        });
      }
    });
};
addEmployee();
