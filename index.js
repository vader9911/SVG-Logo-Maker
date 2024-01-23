const fs = require('fs');
const color = require('color-name');
const inquirer = require('inquirer');

// const colorName = require('color-name');
const saveFile = require('./lib/save');
const {Shape, Text, Square, Circle, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');
const { text } = require('express');



inquirer.prompt(questions).then(function(answer){
    console.log(answer);

    

    const textContent = new Text();
    textContent.setColor(answer.txtColor);
    textContent.setText(answer.text);
    
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


    const svg = shapeType.render() + textContent.render();

    const shape = new Shape(svg);
    
    
    
    saveFile(answer.filename, shape.render());


});



// save(answer.filename)