const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");


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

function createLogo(data) {
    if (data.shapes === "Circle") {
return new Circle(data.text, data.textColor, data.shapeColor);
} else if (data.shapes === "Triangle") {
       return new Triangle(data.text, data.textColor, data.shapeColor);
    } else if (data.shapes === "Square") {
        return new Square(data.text, data.textColor, data.shapeColor);
    } else {
        return ""
    }
}

const init = () => {
    questions()
    .then((answers) => writeFile('./examples/logo.svg', createLogo(answers)))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.log(err));
}

init();