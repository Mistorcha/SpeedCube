
canvasWidth = 200 //useless but why not
canvasHeight = 200
dim = 3; //do not modify that, I'm only interested in 3x3x3 cube so it's not made to accept different sizes, sorry
sideLength = 100 //tentative to fit the cube in the canvas, the 1.3 is just helping to do that, mostly due to easyCam dezooming by default.
let cube = 0

function setup() {
    smooth()
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    createEasyCam();
    document.oncontextmenu = ()=>false;
    cube = new Cube()
    cube.createCubies()
    cube.cubieList[0].h = 1  
}

  
  function draw() {
    background(200)
    cube.show()

}

function keyPressed () {
  if (key === ' ') {
    cube.processAlg("F R U' R' U' R U R' F' R U R' U' R' F R F'")
    //cube.processAlg("U")
  }
  if (key === "r") {
    cube.turn("X", 1, HALF_PI)
  }
  if (key === "t") {
    cube.turn("Y", -1, -HALF_PI)
  }
  if (key === "y") {
    cube.turn("Z", 1, HALF_PI)
  }
  if (key === "f") {
    cube.turn("X", 1, -HALF_PI)
  }
  if (key === "g") {
    cube.turn("Y", -1, HALF_PI)
  }
  if (key === "h") {
    cube.turn("Z", 1, -HALF_PI)
  }
  
}