// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ''
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ''
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {
  if (!license) {
      return '';
  }

  return `
## License

This project is licensed under the terms of the ${license} license. 
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${generateLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}


## Description
${data.description}

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#testing)


## Installation
${data.installation}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.testing}

## Questions
* Github Repo: [https://github.com/${data.github}]
* Contact: ${data.email}






`;
}

export default generateMarkdown;
