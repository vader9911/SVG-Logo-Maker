const { Text, Square, Circle, Triangle } = require('./shapes');





test('Triangle rendering with color', () => {
    const triangle = new Triangle(150, 18, 244, 182, 56, 182);

    triangle.setColor("blue");

    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    const renderedSVG = triangle.render();

    expect(renderedSVG).toEqual(expectedSVG);
});