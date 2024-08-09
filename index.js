// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please give instruction on how to install your project',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please give any usage information',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose your license',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'Creative Commons', 'Mozilla'],
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide any contribution guidelines',
    },

    {
        type: 'input',
        name: "testing",
        message: 'Please provide test instructions',
    },

    {
        type: 'input',
        name: "github",
        message: 'What is your Github username?',
    },

    {
        type: 'input',
        name: "email",
        message: 'What is your Email address?',
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
