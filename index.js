const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes.js");

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// Prompts for users to enter logo information
const questions = () => {
    return inquirer.prompt([
        {
            type: "maxlength-input",
            message:"Enter up to 3 text characters.",
            name: "text",
            maxLength: 3
        },
        {
            type: "input",
            message:"Enter a text color.",
            name: "textColor",
        },
        {
            type: "list",
            message:"Please choose a shape.",
            name: "shapes",
            choices: [
                "Circle",
                "Triangle",
                "Square",
            ],
        },
        {
            type: "input",
            message:"Enter a shape color.",
            name: "shapeColor",
        },
    ]);
};


// Function that creates the logo
function createLogo(shapes, text, textColor, shapeColor) {
    if (shapes === "Circle") {
      const circle = new Circle(text, textColor, shapeColor);
      return circle.render();
    } else if (shapes === "Triangle") {
      const triangle = new Triangle(text, textColor, shapeColor);
      return triangle.render();
    } else if (shapes === "Square") {
      const square = new Square(text, textColor, shapeColor);
      return square.render();
    } else {
      return "";
    }
  }
  
  // Function to initialize application
  const init = () => {
    questions()
      .then((answers) => {
        const { shapes, text, textColor, shapeColor } = answers;
        return writeFile('./examples/logo.svg', createLogo(shapes, text, textColor, shapeColor));
      })
      .then(() => console.log("Generated logo.svg"))
      .catch((err) => console.log(err));
  }
  
  init();