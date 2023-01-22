
canvasWidth = 200 //useless but why not
canvasHeight = canvasWidth
dim = 3; //do not modify that, I'm only interested in 3x3x3 cube so it's not made to accept different sizes, sorry
sideLength = canvasWidth / 2 //tentative to fit the cube in the canvas, the 1.3 is just helping to do that, mostly due to easyCam dezooming by default.
let cube = 0

function setup() {
    smooth()
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    createEasyCam();
    document.oncontextmenu = ()=>false;
    cube = new Cube()
    cube.createCubies()
    cube.cubieList[0].h = 1
    //cube.cubieList[1].h = 2  
}

  
  function draw() {
    background(200)
    cube.show()

}

function keyPressed () {
  if (key === ' ') {
    cube.processAlg(" ")
  }
}