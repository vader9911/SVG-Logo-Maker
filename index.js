class Text {
    constructor(x, y, fontFamily, fontSize, fill){
        this.x = x;
        this.y = y;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.fill = fill;
    }
    
    render() {
        // Add logic to render the text using SVG <text> element
        const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svgText.setAttribute("x", this.x);
        svgText.setAttribute("y", this.y);
        svgText.setAttribute("font-family", this.fontFamily);
        svgText.setAttribute("font-size", this.fontSize);
        svgText.setAttribute("fill", this.fill);
        svgText.textContent = "Hello, SVG!"; // Set the text content

        // Append the <text> element to the SVG container
        const svgContainer = document.getElementById("svg-container"); // Replace with your SVG container ID
        svgContainer.appendChild(svgText);
    }
}

// Example usage:
const textElement = new Text(20, 40, "Arial", 20, "green");
textElement.render();