const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
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
  ]);
};

const generateHTML = ({ id, name, email }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! my ID ${id} and My name is ${name}</h1>
      <p class="lead">This is my email address ${email}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is </li>
        <li class="list-group-item">LinkedIn:</li>
      </ul>
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
