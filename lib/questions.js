

//questions to generate svg from user input
const questions = [
    {
      type: 'input',
      name: 'Text',
      message: "Please enter your 3 letter text:",
      validate: input => {
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
      validate: input => {
        if
      }
    },
    
  ];


module.exports = questions;