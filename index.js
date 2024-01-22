const fs = require('fs');
const color = require('color-name');
const inquirer = require('inquirer');
// const colorName = require('color-name');

const { Text, Square, Circle, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions')



inquirer.prompt(questions).then(function(answer){
    console.log(answer);
});
