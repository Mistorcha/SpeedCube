class Cubie{
    constructor(x, y ,z) {
        this.h = 0;
        this.x = x*sideLength;
        this.y = y*sideLength;
        this.z = z*sideLength;
        this.matrix = new p5.Matrix();
        this.matrix.translate([x*sideLength, y*sideLength, z*sideLength]);
    }
    
    show() {
        fill(255)
        if(this.h == 1){fill(255, 0, 0)}
        
        stroke(0)
        strokeWeight(5)
        push()
        applyMatrix(this.matrix.mat4)
            box(sideLength)
        pop()
    }

    applyMatrixTranslation() {
        resetMatrix()
        let z = this.matrix.mat4
        z[12] = round(z[0])*this.x+round(z[4])*this.y+round(z[8])*this.z
        z[13] = round(z[1])*this.x+round(z[5])*this.y+round(z[9])*this.z
        z[14] = round(z[2])*this.x+round(z[6])*this.y+round(z[10])*this.z
    }
}
