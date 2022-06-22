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
export default function generateMarkdown(data) {
return `# ${data.title} 

## Table of Contents:
* [installation](#installation)
* [Usage](#usage)
* [Lisence](#lisence)
* [contributing](#contribute)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### Lisence:
This project is lisenced under:
${data.lisence}
### Contributing:
${data.contribute}
### Tests:
in order to test open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Questions:
If you have any questions contanct me on [Github](https://github.com/${data.username}) or 
### Email: 
${data.email}

`;
}

//module.exports = {writeFile, copyFile}; 
