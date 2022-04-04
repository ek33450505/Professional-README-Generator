//Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// console.log(inquirer)

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project? (Required)'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type:'input',
            name: 'Installation',
            message: "Please describe how to insall your application (Required)"
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please explain how to use this application? (Required)'
        },
        {
            type: 'checkbox',
            name: 'Licensing',
            message: 'Which lisences are attached to this project? (Check all that apply)',
            choices: ['Apache License 2.0', 'GNU General Public License', 'Boost Software License 1.0', 'Eclipse Public License', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'Contribution Guidelines',
            message: 'Please explain how someone can contribute to this application? (Required)'
        },
        {
            type: 'input',
            name: "Testing",
            message: 'Explain how someone can test this project on their own. (Required)'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)'
        },
        {
            type: 'input',
            name: 'Additional Information',
            message: 'Please provide instructions on how to reach you with additional questions'
        }
    ]);
};
questions()


// // TODO: Create a function to initialize app
// function init() {}

// // // Function call to initialize app
// init();

// // // Function call to initialize app
// init();