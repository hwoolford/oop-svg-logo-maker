class Shapes {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

class Triangle extends Shapes {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
    }
  }

  class Square extends Shapes {
    render() {
     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
    }
  }

  module.exports = {Shapes, Circle, Triangle, Square}