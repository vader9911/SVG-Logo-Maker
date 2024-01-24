//file dependencies 
const colorName = require('color-name');
const regex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

//uses color-name npm package to validate color
const isValidColor = color => {
  return colorName.hasOwnProperty(color);
};

//questions to generate svg from user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: "Please enter your 3 letter text:",
      filter: input => input.toUpperCase(),
      validate: input => {
        // const ans = input;
        if(input.length <= 3) {
          return true; //valid input
        } else {
            return 'Text must be 3 characters or less';
        }
      }
    },
    {
      type: 'input',
      name: 'txtColor',
      message: 'Please enter the color you would like your text to be:',
      filter: input => input.toLowerCase(),
      validate: input => {
        const isKeyword = isValidColor(input) || regex;
        //color validation
        if (isKeyword) {
            return true;
        }else {
            return 'Invalid color. Please enter a valid color keyword or hexadecimal code.';
        }
      }
    },
    // for later implementation
    // {
    //   type: 'input',
    //   name: 'size',
    //   message: 'How large would you like your SVG Logo to be:',
    //   validate: input => {
    //     const numTest = input / 1;
    //     if (isNaN(numTest)){
    //       return 'Invalid number. Please enter a valid number.';
    //     }else {
    //       return true;
    //     }
    //   }
    // },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to have:',
      choices: ["Square", "Circle", "Triangle"]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter the color you would like your shape to be:',
      filter: input => input.toLowerCase(),
      validate: input => {
        const isKeyword = isValidColor(input) || regex;
        //color validation
        if (isKeyword) {
            return true;
        }else {
            return 'Invalid color. Please enter a valid color keyword or hexadecimal code.';
        }
      }
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Please enter the filename you would like to save as:'
    }
    
  ];


module.exports = questions;