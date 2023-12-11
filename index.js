const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const {Shapes, Circle, Triangle, Square} = require("./lib/shapes.js");


const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message:"Enter up to 3 text characters.",
            name: "text",
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