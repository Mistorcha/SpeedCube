class Face {
    constructor(color, x, y, z) {
        this.v = createVector(x, y, z);
        this.color = color
    }

    turnFace(xyz, angle) {
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
        if(this.v.x) {applyMatrix(0, 0, -this.v.x, 0,
                                  0, 1, 0, 0, 
                                  this.v.x, 0, 0, 0, 
                                  this.v.x*50, 0, 0, 1)}
        //if(this.v.x == 1) {applyMatrix(0,0,-1,0,0,1,0,0,1,0,0,0,50,0,0,1)}
        //if(this.v.x == -1){applyMatrix(0,0,1,0,0,-1,0,0,1,0,0,0,-50,0,0,1)}
        if(this.v.y == 1) {applyMatrix(1,0,0,0,0,0,1,0,0,-1,0,0,0,50,0,1)}
        if(this.v.y == -1){applyMatrix(1,0,0,0,0,0,-1,0,0,1,0,0,0,-50,0,1)}
        if(this.v.z == 1){applyMatrix(1,0,0,0,0,1,0,0,0,0,1,0,0,0,50,1)}
        if(this.v.z == -1){applyMatrix(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-50,1)}

        //
        //applyMatrix(this.v[0]*this.v[0], this.v[0]*this.v[1]*1+this.v[2]*1, this.v[0]*this.v[2] - this.v[1], 0,
        //    this.v[0]*this.v[1] - this.v[2], this.v[1]*this.v[1], this.v[1]*this.v[2] + this.v[0], 0,
        //    this.v[0]*this.v[2] + this.v[1], this.v[1] * this.v[2] - this.v[0], this.v[2]*this.v[2], 0,
        //    0, 0, 0, 1)
        plane(98, 98)
        pop()
    }
}