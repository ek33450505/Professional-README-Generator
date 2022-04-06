function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = ''
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
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
