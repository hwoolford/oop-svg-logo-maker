const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");


const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message:"Enter up to 3 text characters.",
            name: "initials",
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