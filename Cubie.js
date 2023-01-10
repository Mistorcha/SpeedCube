class Cubie{
    constructor(i, j, k, x, y, z, sideLength) {
        this.r = sideLength / 2
        this.rr = this.r *0.9
        this.posInSpace = [i, j, k]
        this.initialPos = createVector(x, y, z)
        this.pos = createVector(x, y, z)
    
        this.quads = []
        this.fillQuads()
    }

    fillQuads() {
        if(this.posInSpace[0] == 0) {
            this.quads.push(["orange",
                            [-this.r, -this.rr, -this.rr],
                            [-this.r,  this.rr, -this.rr],
                            [-this.r,  this.rr,  this.rr],
                            [-this.r, -this.rr,  this.rr]])
        }
        if(this.posInSpace[0] == dim-1) {
            this.quads.push(["red",
                            [ this.r, -this.rr, -this.rr],
                            [ this.r,  this.rr, -this.rr],
                            [ this.r,  this.rr,  this.rr],
                            [ this.r, -this.rr,  this.rr]])
        }
        if(this.posInSpace[2] == 0) {
            this.quads.push(["blue",
                            [-this.rr, -this.rr, -this.r],
                            [ this.rr, -this.rr, -this.r],
                            [ this.rr,  this.rr, -this.r],
                            [-this.rr,  this.rr, -this.r]])
        }
        if(this.posInSpace[2] == dim-1) {
            this.quads.push(["green",
                            [-this.rr, -this.rr,  this.r],
                            [ this.rr, -this.rr,  this.r],
                            [ this.rr,  this.rr,  this.r],
                            [-this.rr,  this.rr,  this.r]])
        }
        if(this.posInSpace[1] == 0) {
            this.quads.push(["white",
                            [-this.rr, -this.r, -this.rr],
                            [ this.rr, -this.r, -this.rr],
                            [ this.rr, -this.r,  this.rr],
                            [-this.rr, -this.r,  this.rr]])
        }
        if(this.posInSpace[1] == dim-1) {
            this.quads.push(["yellow",
                            [-this.rr,  this.r, -this.rr],
                            [ this.rr,  this.r, -this.rr],
                            [ this.rr,  this.r,  this.rr],
                            [-this.rr,  this.r,  this.rr]])
        }
    }

    show() {
        fill(255)
        stroke(0)
        strokeWeight(2)
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        beginShape(QUADS);
        for (let i = 0; i< this.quads.length; i++) {
        fill(this.quads[i][0])
        vertex(this.quads[i][1][0], this.quads[i][1][1], this.quads[i][1][2])
        vertex(this.quads[i][2][0], this.quads[i][2][1], this.quads[i][2][2])
        vertex(this.quads[i][3][0], this.quads[i][3][1], this.quads[i][3][2])
        vertex(this.quads[i][4][0], this.quads[i][4][1], this.quads[i][4][2])
        }
        endShape();
        
        pop()
    }
}
