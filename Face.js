class Face {
    constructor(color, x, y, z) {
        this.v = createVector(x, y, z);
        this.color = color
    }

    turnFace(xyz, angle) { //rotate the face with the same angle than for the cubie
        let v2 = createVector(0, 0, 0)
        if(xyz == "X") {
            v2.y = round(this.v.y * cos(angle) - this.v.z * sin(angle));
            v2.z = round(this.v.y * sin(angle) + this.v.z * cos(angle));
            v2.x = round(this.v.x);
        }
        if(xyz == "Y") {
            v2.x = round(this.v.x * cos(angle) + this.v.z * sin(angle));
            v2.z = round(-this.v.x * sin(angle) + this.v.z * cos(angle));
            v2.y = round(this.v.y);
        }
        if(xyz == "Z") {
            v2.x = round(this.v.x * cos(angle) - this.v.y * sin(angle));
            v2.y = round(this.v.x * sin(angle) + this.v.y * cos(angle));
            v2.z = round(this.v.z);
        }
        this.v = v2
        
    }

    show() {
        push()
        fill(this.color)
        noStroke()
        let dist = sideLength / 2
        //by default the faces are facing z axis, for turning in x direction a rotation along y is needed
        //for turning in y direction a rotation along x is needed (see rotation matrices in wikipedia)
        if(this.v.x) {applyMatrix(0, 0, -this.v.x, 0, 0, 1, 0, 0, this.v.x, 0, 0, 0, this.v.x*dist, 0, 0, 1)}
        if(this.v.y) {applyMatrix(1, 0, 0, 0, 0, 0, this.v.y, 0, 0, -this.v.y, 0, 0, 0, this.v.y*dist, 0, 1)}
        if(this.v.z) {applyMatrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, this.v.z*dist, 1)}
        //faces are drawn just slightly smaller than the size of the sidelenght. Need to replace it if sideLength changes
        plane(sideLength * 0.96, sideLength * 0.96)
        pop()
    }
}