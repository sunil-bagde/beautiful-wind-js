class Square {
  constructor(width) {
    this.width = width;
  }

  get height() {
    // console.log("get height");
    return this.width;
  }
  set height(h) {
    // console.log("set height", h);
    this.width = h;
  }
  get area() {
    //console.log("get area");
    console.log(this.width + " " + this.height);
    return this.width * this.height;
  }
}

let square = new Square(111);
let print;

print = square.width;
console.log(print + "\n");

print = square.height = 6;
console.log(print + "\n");

print = square.area;
console.log(print + "\n");
