class Cubie{
    constructor(x, y ,z) {
        this.h = 0;
        this.x = x*sideLength;
        this.y = y*sideLength;
        this.z = z*sideLength;
        this.faces = [];
        this.matrix = new p5.Matrix();
        this.matrix.translate([this.x, this.y, this.z]);
        this.facesCreation(x, y, z);
    }

    facesCreation(x, y ,z){
        if (x == -1) {this.faces.push(new Face(color(255, 165,   0),  x,  0,  0))}
        if (x ==  1) {this.faces.push(new Face(color(255,   0,   0),  x,  0,  0))}
        if (y == -1) {this.faces.push(new Face(color(255, 255, 255),  0,  y,  0))}
        if (y ==  1) {this.faces.push(new Face(color(255, 255,   0),  0,  y,  0))}
        if (z == -1) {this.faces.push(new Face(color(  0,   0, 255),  0,  0,  z))}
        if (z ==  1) {this.faces.push(new Face(color(  0, 255,   0),  0,  0,  z))}
    }
    
    turnFaces(xyz, angle) {
        for (let i = 0; i<this.faces.length; i++) {
            this.faces[i].turnFace(xyz, angle)
        }
    }

    show() {
        noFill()
        stroke(0)
        strokeWeight(5)
        push()
        applyMatrix(this.matrix.mat4)
        for(let i = 0; i < this.faces.length; i++) {
            this.faces[i].show()
        }
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
