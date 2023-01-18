class Cubie{
    constructor(x, y ,z) {
        this.h = 0;
        this.x = x*sideLength;
        this.y = y*sideLength;
        this.z = z*sideLength;
        this.matrix = new p5.Matrix();
        this.matrix.translate([this.x, this.y, this.z]); 
    }
    
    show() {
        fill(255)
        if(this.h) {fill(255, 0, 0)}
        stroke(0)
        strokeWeight(5)
        push()
        applyMatrix(this.matrix.mat4)
            box(sideLength)
        pop()
    }

    applyMatrixTranslation() {
        let a = this.matrix.mat4
        this.x = round(a[0])*a[12]+round(a[4])*a[13]+round(a[8])*a[14]
        this.y = round(a[1])*a[12]+round(a[5])*a[13]+round(a[9])*a[14]
        this.z = round(a[2])*a[12]+round(a[6])*a[13]+round(a[10])*a[14]
        this.matrix = new p5.Matrix();
        this.matrix.mat4[12] = this.x;
        this.matrix.mat4[13] = this.y;
        this.matrix.mat4[14] = this.z;
    }
}
