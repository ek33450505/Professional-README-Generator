const fs = require('fs');

const generatePage = require('./src/page-template.js');

const readmeDataArgs = process.argv.slice(2);

const [title, github] = readmeDataArgs;



  fs.writeFile('index.html', generatePage(title, github), err => {
    if (err) throw err;
  
    console.log('README complete! Check out index.html to see the output!');
  });

  // // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();