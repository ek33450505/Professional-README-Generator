//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

// Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a title to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Your need to enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'installation',
            message: "Please describe how to insall your application (Required)",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to describe how to insall your application!')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to use this application? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to explain how to use this application!')
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which licenses are attached to this project? (Please choose one to apply)',
            choices: ['MIT', 'GNU 2.0', 'Apache 2.0', 'GNU 3.0']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please explain how someone can contribute to this project? (Required)',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('You must explain how someone can contribute to this porject!')
                }
            }
        },
        {
            type: 'input',
            name: "tests",
            message: 'Explain how someone can test this application on their own. (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('You must explain how to test this application!')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Plese enter your email address!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdditionalQuestions',
            message: 'Would you like to provide instructions on how to reach you with additional questions',
            default: true
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide additional information on how to reach you with additional questions:',
            when: ({ confirmAdditionalQuestions }) => {
                if (confirmAdditionalQuestions) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information was sucessfully transferred to YourREADME.md!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("YourREADME.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();