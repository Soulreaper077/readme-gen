// TODO: Include packages needed for this application
// const generateMarkdown = require('generateMarkdown');
import generateMarkdown from './generateMarkdown.js';
//const fs = require('fs');
import fs from 'fs';
//const inquirer = require('inquirer');
import inquirer from 'inquirer';
// things i am not sure i need but will still add to try and resolve issues 
//const packageJSON = require('../package.json'); 
//import packageJSON from '../package.json'


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "author",
    message: "what is your name? (required)",
    validate(answer) {
        if(!answer) {
            return "Please, fill in your name!"
        }
        return true
    }
},
{
    type: "input",
    name: "username",
    message: "what is your Github Username? (required)",
    validate(answer) {
        if(!answer) {
            return "Please, fill in your Github username!"
        }
        return true
    }
},
{
    type: "input",
    name: "email",
    message: "what is your email address? (required)",
    validate(answer) {
        if(!answer) {
            return "Please, fill in valid email address!"
        }
        return true
    }
},
{
    type: "input",
    name: "title",
    message: "what is the title for your project? (required)",
    validate(answer) {
        if(!answer) {
            return "Please, fill in a valid project name!"
        }
        return true
    }
},
{
    type: "input",
    name: "description",
    message: "write a brief description of your project here: (required)",
    validate(answer) {
        if(!answer) {
            return "Please, fill in valid description!"
        }
        return true
    }
},
{
    type: "list",
    name: "license",
    message: "what kind of lisence should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    name: "installations",
    message: "What command should be run to install dependencies?"
},
{
    type: "input",
    name: "usage",
    message: "what does your user need to know about using the repo?"
},
{
    type: "input",
    name: "contribute",
    message: "what does the user need to know about contributing to the repo?"
},
]
//.then(data => console.log(data));

// function writeToFile(fileName, data) {
//     fs.writeToFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if(err) {
//             return console.log(err)
//         }else {
//             console.log("success")
//         }
//     })
// }

function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        const saveData = generateMarkdown(data);
        fs.writeFile("README.md", saveData, (err) => {
            if(err) throw err;
            console.log("success yo!!!")
        }) 
        
    })
}

init(); 