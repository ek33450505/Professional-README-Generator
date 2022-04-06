function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  // MIT is generating a badge
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  // GNU 2.0 is not displaying on README 
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-9cf.svg)`
  };
  // Apache is not displaying on README  
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-lightgrey.svg)`
    };
  // GNU 3.0 is not displaying on README 
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-critical.svg)`
    };
  return licenseString
  };

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${licenseBadge(data)}

  ## Description:
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#lisence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests} 

  ## Questions:
  - GitHub Username: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  - How to reach out with additional questions: ${data.questions}`;
}

module.exports = generateMarkdown;
