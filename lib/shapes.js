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
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

class Triangle extends Shapes {
    render() {
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points "150,0 300,200 0,200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
    }
  }

  class Square extends Shapes {
    render() {
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
    }
  }
