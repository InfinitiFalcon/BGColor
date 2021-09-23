var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(100, 50)
  btn_red.mousePressed(redBG)
  btn_red = createButton("GREEN");
  btn_red.position(250, 50)
  btn_red.mousePressed(greenBG)

}

function draw() {
  background(r,g,b);
}

function redBG()
{
  r = 255
  g = 0
  b = 0
}

function redBG()
{
  r = 0
  g = 255
}

