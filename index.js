const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const shapes = require("./lib/shapes");


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
            name: "shape",
            choices: [
                "circle",
                "triangle",
                "square",
            ],
        },
        {
            type: "input",
            message:"Enter a shape color.",
            name: "shapeColor",
        },
    ]);
};