
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
    cube.cubieList[1].h = 2
    cube.cubieList[2].h = 3
    cube.cubieList[3].h = 4
    cube.cubieList[5].h = 5
    cube.cubieList[6].h = 6
    cube.cubieList[7].h = 7
    cube.cubieList[8].h = 8
    
}

  
  function draw() {
    background(200)
    cube.show()
    box(20)
}

function keyPressed () {
  if (key === "r") {
    cube.turn("X", -1, HALF_PI)
  }
  if (key === "f") {
    cube.turn("Y", -1, HALF_PI)
  }
}