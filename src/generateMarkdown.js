// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Liscensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-orange)]

  ## Description:

  ## Table of Contents:

  ## Installation:

  ## Usage:

  ## License:

  ## Contributing Guidelines:

  ## Testing:

  ## Questions?:
  - GitHub Username:
  - Email:
  - How to reach out with additional questions:
`;
}

module.exports = generateMarkdown;
