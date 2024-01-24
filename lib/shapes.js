//file dependencies 
const fs = require('fs');


//shape parent class 
//additional vars added for not implemented func
class Shape {
    constructor(content, x, y, fill, stroke, strokeWidth){
        this.content = content 
        this.x = x || 300;
        this.y = y || 200;
        this.fill = fill || undefined ;
        this.stroke = stroke || undefined ;
        this.strokeWidth = strokeWidth || undefined ;
        
    }

    render() {
        const shape = `<svg width="${this.x}" height="${this.y}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
        return shape + this.content + '</svg>';
        
    }
}




//classes for different shapes

//text class
class Text extends Shape{
    constructor(x, y, fontFamily, fontSize, fill, text){
        super(x, y, fill)

        this.x = x || "50%";
        this.y = y || "50%";
        this.fontFamily = fontFamily || "";
        this.fontSize = fontSize || "";
        this.text = text || "";
    }  
    
    setColor(newFill) {
        this.fill = newFill || "";
    }

    setText(newText) {
        this.text = newText || "";
    }

    render() {
        const text = `<text x="${this.x}" y="${this.y}" fill="${this.fill}" font-size="80" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
        return text;
    }
   
}

//square class 
class Square extends Shape{
    constructor(width, height, fill, stroke, strokeWidth){
        super(fill, stroke, strokeWidth);
        this.width = width || 200;
        this.height = height || 200;
        this.stroke = stroke ||10
    }

    setColor(newFill) {
        this.fill = newFill || "";
    }

    render() {
        const svgSquare = `<rect width="${this.width}" height="${this.height}" x="50" fill="${this.fill}" />`;
        // fs.writeFileSync('./examples/square.svg', svgSquare);
        console.log("Rendering Square");
        return svgSquare;
    }
}

//circle class
class Circle extends Shape{
    constructor( cx, cy, r, fill, stroke, strokeWidth){
        super(cx, cy, fill, stroke, strokeWidth);
        this.cx = cx || 150 ;
        this.cy = cy || 100;
        this.r = r || 100;
    
    }

    setColor(newFill) {
        this.fill = newFill || "";
    }

    render() {
        const svgCircle = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
        // fs.writeFileSync('./examples/circle.svg', svgCircle);
        console.log("Rendering Circle");
        return svgCircle;
    }
}

//triangle class
class Triangle extends Shape{
    constructor(x1, y1, x2, y2, x3, y3, fill, stroke, strokeWidth) {
        super(fill, stroke, strokeWidth);
        this.x1 = x1 || 0;
        this.y1 = y1 || 200;
        this.x2 = x2 || 150;
        this.y2 = y2 || 0;
        this.x3 = x3 || 300;
        this.y3 = y3 || 200;

    }

    setColor(newFill) {
        this.fill = newFill || "";
    }


    render() {
        const svgTriangle = `<polygon points="${this.x1}, ${this.y1} ${this.x2}, ${this.y2} ${this.x3}, ${this.y3}" fill="${this.fill}" />`;
        
        console.log("Rendering Triangle");
        return svgTriangle;
    }
}

module.exports = {
    Shape,
    Text,
    Square,
    Circle,
    Triangle
};
