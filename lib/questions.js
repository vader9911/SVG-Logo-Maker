const colorName = require('color-name');
const { Triangle } = require('./shapes');


const isValidColor = color => {
  return colorName.hasOwnProperty(color);
};

//questions to generate svg from user input
const questions = [
    {
      type: 'input',
      name: 'Text',
      message: "Please enter your 3 letter text:",
      validate: input => {
        const ans = input;
        if(input.length <= 3) {
          return true; //valid input
        } else {
            return 'Text must be 3 characters or less';
        }
      }
    },
    {
      type: 'input',
      name: 'Color',
      message: 'Please enter the color you would like your text to be:',
      filter: input => input.toLowerCase(),
      validate: input => {
        const isKeyword = isValidColor(input);

        if (isKeyword) {
            return true;
        }else {
            return 'Invalid color. Please enter a valid color keyword or hexadecimal code.';
        }
      }
    },
    {
      type: 'input',
      name: 'Size',
      message: 'How large would you like your SVG Logo to be:',
      validate: input => {
        const numTest = input / 1;
        if (isNaN(numTest)){
          return 'Invalid number. Please enter a valid number.';
        }else {
          return true;
        }
      }
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to have:',
      choices: ["Square", "Circle", "Triangle"]
    }

    
  ];


module.exports = questions;