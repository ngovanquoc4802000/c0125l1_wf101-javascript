class Circle {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
  }
  getRandomHex() {
    return Math.floor(Math.random() * 256)
  }
  getRandomColor() {
    var red = this.getRandomHex();
    var green = this.getRandomHex();
    var blue = this.getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
  }
  createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = this.getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
  createMultipleCircle() {
    for(var i = 0; i < 50; i++){
      this.createCircle();
    }
  }
}
const result = new Circle();
result.createMultipleCircle()
