
canvasWidth = 200
canvasHeight = 200
dim = 10;
cube = []
cubieSideLength = (canvasWidth/0.7) / dim;

//TOP, BOTTOM, RIGHT, LEFT, FRONT, BACK
color = ["white", "yellow", 'red', "orange", 'green', 'blue']



function setup() {
    smooth()
    createCanvas(200, 200, WEBGL);
    createEasyCam();
    document.oncontextmenu = ()=>false;


    for         (i = 0; i < dim; i++) {
        cube.push([])
        for     (j = 0; j < dim; j++) {
            cube[i].push([])
            for (k = 0; k < dim; k++) {
                offset = (dim - 1) * cubieSideLength / 2
                x = cubieSideLength * i - offset;
                y = cubieSideLength * j - offset;
                z = cubieSideLength * k - offset
                cube[i][j].push(new Cubie(x, y, z, cubieSideLength))
            }
        }
    }

  }
  
  function draw() {
    background(58)
    for         (i = 0; i < dim; i++) {
        for     (j = 0; j < dim; j++) {
            for (k = 0; k < dim; k++) {
                cube[i][j][k].show()
            }
        }
    }
  }