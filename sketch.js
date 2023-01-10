
canvasWidth = 200
canvasHeight = 200
dim = 3;
cube = []
cubieSideLength = (canvasWidth/0.7) / dim;


function setup() {
    let h = new p5.Matrix()
    print(h)
    smooth()
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    createEasyCam();
    document.oncontextmenu = ()=>false;


    for         (i = 0; i < dim; i++) {
        for     (j = 0; j < dim; j++) {
            for (k = 0; k < dim; k++) {
                if(i == 0 || j == 0 || k == 0 || i == dim-1 || j == dim-1 || k == dim-1) {
                    offset = (dim - 1) * cubieSideLength / 2
                    x = cubieSideLength * i - offset;
                    y = cubieSideLength * j - offset;
                    z = cubieSideLength * k - offset
                    cube.push(new Cubie(i, j, k, x, y, z, cubieSideLength))
                }
            }
        }
    }
}
  
  function draw() {
    background(200)
    for (i = 0; i < cube.length; i++) {
        cube[i].show()
    }
}