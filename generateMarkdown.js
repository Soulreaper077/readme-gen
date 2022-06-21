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
return `# ${data.title} // was data.title 
${badge}
${data.description}
## Table of Contents:
* [installation](#installation)
* [Usage](#usage)
* [Lisence](#lisence)
* [contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
In order to install the necessart dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### Lisence:
This project is lisenced under:
${data.lisence}
### Contributing:
${data.contributing}
### Tests:
in order to test open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Questions:
If you have any questions contanct me on [Github](https://github.com/${data.username})
`;
}

// module.exports = generateMarkdown; 
