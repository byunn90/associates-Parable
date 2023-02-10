const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
// const Employee = require("./lib/Employee");
// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
/*
function to generate employee's {
  we have to use node.js to create employees 
  takes a input with inqurerier 
  name
  email address
  id
}

*/

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
      name: "school",
      message:
        "What is the name of the school you are attending (Intern only)?",
      when: (answers) => answers.role === "Intern",
    },
  ]);
};

const generateHTML = ({ id, name, email, role, github, school }) =>
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
  <header class="p-5 mb-4 header bg-light">
    <div class="card mx-auto" style="width: 18rem;">
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
          </li>
          <li class="list-group-item">School: ${
            role === "Engineer" ? "NA" : school
          }</li>
        </ul>
      </div>
    </div>
  </header>
</body>
</html>`;

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile("./dist/index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

init();
