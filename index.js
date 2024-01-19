const fs = require('fs');
const inquirer = require('inquirer');
const colorName = require('color-name');

const { Text, Square, Circle, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions')

const textInstance = new Text();
const squareInstance = new Square();
const circleInstance = new Circle();
const triangleInstance = new Triangle();

