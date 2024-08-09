// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your application',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err) : console.log("Success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then(data => writeToFile("README.md", data))
}

// Function call to initialize app
init();
