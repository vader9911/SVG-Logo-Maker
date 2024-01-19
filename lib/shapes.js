const fs = require('fs');
const colorName = require('color-name');
class Shape {
    constructor(x, y, fill, stroke, strokeWidth){
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        
    }

    render() {
        
        throw new Error('Render method not implemented.')
    }
}




//classes for different shapes

//text class
class Text extends Shape{
    constructor(x, y, fontFamily, fontSize, fill, text){
        super(x, y, fill)

        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.text = text;
    }  
    
    setColor(newFill) {
        this.fill = newFill;
    }

    render() {
        const text = `<text x='${this.x}' y='${this.y}' font-size='${this.fontSize}' font-family='${this.fontFamily}' fill="${this.fill}">${this.text}</text>`;
        fs.writeFileSync('./examples/circle.svg', text);
        console.log("Rendering Circle");
        return text;
    }
   
}

//square class 
class Square extends Shape{
    constructor(x, y, sideLength, fill, stroke, strokeWidth){
        super(x, y, fill, stroke, strokeWidth);
        this.sideLength = sideLength;
    }

    render() {
        const svgSquare = `<polygon points="${this.cx}, ${this.cy}, ${this.r}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
        fs.writeFileSync('./examples/square.svg', svgSquare);
        console.log("Rendering Square");
        return svgSquare;
    }
}

//circle class
class Circle extends Shape{
    constructor( cx, cy, r, fill, stroke, strokeWidth){
        super( fill, stroke, strokeWidth);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    setColor(newFill) {
        this.fill = newFill;
    }

    render() {
        const svgCircle = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
        fs.writeFileSync('./examples/circle.svg', svgCircle);
        console.log("Rendering Circle");
        return svgCircle;
    }
}

//triangle class
class Triangle extends Shape{
    constructor(x1, y1, x2, y2, x3, y3, fill, stroke, strokeWidth) {
        super(fill, stroke, strokeWidth);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

    }

    setColor(newFill) {
        this.fill = newFill;
    }


    render() {
        const svgTriangle = `<polygon points="${this.x1}, ${this.y1} ${this.x2}, ${this.y2} ${this.x3}, ${this.y3}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
        fs.writeFileSync('./examples/triangle.svg', svgTriangle);
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
