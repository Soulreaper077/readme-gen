// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === "APACHE 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "GPL 3.0") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === "BSD 3") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === "None") {
        return ``
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
    const badge = renderLicenseLink(data.license)
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
## Installation:
In order to install the necessary dependencies, open the console and run the following:
${data.installations}
## Usage:
${data.usage}
## License:
This project is lisenced under:
${badge}
### Contributing:
${data.contribute}
## Tests:
in order to test open the console and run the following:
\`\`\`${data.installations}\`\`\`
## Questions:
If you have any questions contanct me on [Github](https://github.com/${data.username}) or 
## Email: 
${data.email}

`;
}

//module.exports = generateMarkdown;  
