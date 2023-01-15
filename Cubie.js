class Cubie{
    constructor(x, y ,z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.matrix = new p5.Matrix();
        this.matrix.translate([x*sideLength, y*sideLength, z*sideLength]);
    }
    
    show() {
        fill(255)
        if(this.h){fill('red')}
        stroke(0)
        strokeWeight(5)
        push()
        applyMatrix(this.matrix.mat4)
            box(sideLength)
        pop()
    }
}
