class Face {
    constructor(color, x, y, z) {
        this.v = createVector(x, y, z);
        this.color = color
    }


    show() {
        push()
        fill(this.color[0], this.color[1], this.color[2])
        if(this.v.x == 1) {applyMatrix(0,0,-1,0,0,1,0,0,1,0,0,0,50,0,0,1)}
        if(this.v.x == -1){applyMatrix(0,0,1,0,0,-1,0,0,1,0,0,0,-50,0,0,1)}
        if(this.v.y == 1) {applyMatrix(1,0,0,0,0,0,1,0,0,-1,0,0,0,50,0,1)}
        if(this.v.y == -1){applyMatrix(1,0,0,0,0,0,-1,0,0,1,0,0,0,-50,0,1)}
        if(this.v.z == 1){applyMatrix(1,0,0,0,0,1,0,0,0,0,1,0,0,0,50,1)}
        if(this.v.z == -1){applyMatrix(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-50,1)}

        //
        //applyMatrix(this.v[0]*this.v[0], this.v[0]*this.v[1]*1+this.v[2]*1, this.v[0]*this.v[2] - this.v[1], 0,
        //    this.v[0]*this.v[1] - this.v[2], this.v[1]*this.v[1], this.v[1]*this.v[2] + this.v[0], 0,
        //    this.v[0]*this.v[2] + this.v[1], this.v[1] * this.v[2] - this.v[0], this.v[2]*this.v[2], 0,
        //    0, 0, 0, 1)
        plane(100, 100)
        pop()
    }
}