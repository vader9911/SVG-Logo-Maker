const fs = require('fs');

class Shape {
    constructor(x, y, fill, stroke, strokeWidth){
        this.x = x || 200;
        this.y = y || 200;
        this.fill = fill || undefined ;
        this.stroke = stroke || undefined ;
        this.strokeWidth = strokeWidth || undefined ;
        
    }

    render() {
        const shape = `<svg width="${this.x}" height="${this.y}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
        return shape + '</svg>';
        // throw new Error('Render method not implemented.')
    }
}




//classes for different shapes

//text class
class Text extends Shape{
    constructor(x, y, fontFamily, fontSize, fill, text){
        super(x, y, fill)

        this.fontFamily = fontFamily || "";
        this.fontSize = fontSize || "";
        this.text = text || "";
    }  
    
    setColor(newFill) {
        this.fill = newFill || "";
    }

    render() {
        const text = `<text x='${this.x}' y='${this.y}' font-size='${this.fontSize}' font-family='${this.fontFamily}' fill="${this.fill}">${this.text}</text>`;
        return text;
    }
   
}

//square class 
class Square extends Shape{
    constructor(width, height, fill, stroke, strokeWidth){
        super(fill, stroke, strokeWidth);
        this.width = width;
        this.height = height;
    }

    setColor(newFill) {
        this.fill = newFill || "";
    }

    render() {
        const svgSquare = `<rect width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
        // fs.writeFileSync('./examples/square.svg', svgSquare);
        console.log("Rendering Square");
        return svgSquare;
    }
}

//circle class
class Circle extends Shape{
    constructor( cx, cy, r, fill, stroke, strokeWidth){
        super(cx, cy, fill, stroke, strokeWidth);
        this.cx = cx ||  cx / 2 ;
        this.cy = cy || cy / 2;
        this.r = r || 20;
    
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
        this.y1 = y1 || 0;
        this.x2 = x2 || 0;
        this.y2 = y2 || 0;
        this.x3 = x3 || 0;
        this.y3 = y3 || 0;

    }

    setColor(newFill) {
        this.fill = newFill || "";
    }


    render() {
        //circle markup
        const svgTriangle = `<polygon points="${this.x1}, ${this.y1} ${this.x2}, ${this.y2} ${this.x3}, ${this.y3}" fill="${this.fill}" />`;
        
        //Render Text
        const text = new Text(this)
        
        
        const svgTriangleText = 

        
        // fs.writeFileSync('./examples/triangle.svg', svgTriangleText);
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
