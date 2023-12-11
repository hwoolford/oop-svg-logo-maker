const { Circle, Triangle, Square } = require("./shapes.js");

describe('circle', () => {
    it('should create a circle logo and save it as an SVG file', () => {
const circle = new Circle();
circle.setShapeColor("black");
circle.setTextColor("white");
circle.setText("ABC");
expect(circle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>');
});
});


describe('triangle', () => {
    it('should create a triangle logo and save it as an SVG file', () => {
const triangle = new Triangle();
triangle.setShapeColor("black");
triangle.setTextColor("white");
triangle.setText("ABC");
expect(triangle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 200 0, 200" fill="black" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>');
});
});


describe('square', () => {
    it('should create a square logo and save it as an SVG file', () => {
const square = new Square();
square.setShapeColor("black");
square.setTextColor("white");
square.setText("ABC");
expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="black" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>`);
});
});