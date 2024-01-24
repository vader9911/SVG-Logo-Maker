//file dependencies 
const fs = require('fs');
const color = require('color-name');
const inquirer = require('inquirer');

// import other file dependencies 
const saveFile = require('./lib/save');
const {Shape, Text, Square, Circle, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

//imports questions form questions.js  and prompts user
inquirer.prompt(questions).then(function(answer){
    

    
//set txt content and color
    const textContent = new Text();
    textContent.setColor(answer.txtColor);
    textContent.setText(answer.text);
    
    //switch case for handling shape type
    let shapeType;
    switch (answer.shape) {
         case 'Square':
            shapeType = new Square();
            shapeType.setColor(answer.shapeColor);
            break;
        case 'Circle':
            shapeType = new Circle();
            shapeType.setColor(answer.shapeColor);
            break;
        case 'Triangle':
            shapeType = new Triangle();
            textContent.y = "70%";
            shapeType.setColor(answer.shapeColor);
            break;
    }

//combine the shape and the text 
    const svg = shapeType.render() + textContent.render();
//create a new shape from the combined svg
    const shape = new Shape(svg);
    
    
    //save the file with the chosen filename
    saveFile(answer.filename, shape.render());


});


