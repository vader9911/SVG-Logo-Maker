const {Shape, Text, Square, Circle, Triangle } = require('./shapes');


test('Shape render for dimensions', () => {
  const shape = new Shape(" ", 150, 200)

  const expectedSVG = '<svg width="150" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">' + ' </svg>';
  const renderedSVG = shape.render();
  expect(renderedSVG).toEqual(expectedSVG);
})

test('Text rendering with color', () => {
    const text = new Text(100, 100);

    text.setColor("red");
    text.setText("this is a test!")

    const expectedSVG = '<text x="100" y="100" fill="red" font-size="80" text-anchor="middle" alignment-baseline="middle">this is a test!</text>';
    const renderedSVG = text.render();

    expect(renderedSVG).toEqual(expectedSVG);
});

test('Square rendering with color', () => {
    const square = new Square(140, 140);

    square.setColor("green");

    const expectedSVG = '<rect width="140" height="140" x="50" fill="green" />';
    const renderedSVG = square.render();

    expect(renderedSVG).toEqual(expectedSVG);
});

test('Circle rendering with color', () => {
    const circle = new Circle(150, 150, 80);

    circle.setColor("red");

    const expectedSVG = '<circle cx="150" cy="150" r="80" fill="red" />';
    const renderedSVG = circle.render();

    expect(renderedSVG).toEqual(expectedSVG);
});


test('Triangle rendering with color', () => {
    const triangle = new Triangle(150, 18, 244, 182, 56, 182);

    triangle.setColor("blue");

    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    const renderedSVG = triangle.render();

    expect(renderedSVG).toEqual(expectedSVG);
});