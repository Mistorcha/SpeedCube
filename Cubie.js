class Cubie{
    constructor(i, j, k, x, y, z, sideLength) {
        this.halfLength = sideLength / 2
        this.halfLengthDrawing = this.halfLength *0.9
        this.posInSpace = [i, j, k]
        this.initialPos = createVector(x, y, z)
        this.pos = createVector(x, y, z)
    
        this.quads = []
        this.fillQuads()
    }
    //Only create colored necessary for a given Cubie, faces are stored in this.quads, this should reduce load on CPU when this.show() is called
    //halflength defines the real size of each Cubie while halfLengthDrawing define a smaller portion than halfLength, allowing empty area around the shapes
    // (allows to see what is behind)
    fillQuads() {
        if(this.posInSpace[0] == 0) {
            this.quads.push(["orange",
                            [-this.halfLength, -this.halfLengthDrawing, -this.halfLengthDrawing],
                            [-this.halfLength,  this.halfLengthDrawing, -this.halfLengthDrawing],
                            [-this.halfLength,  this.halfLengthDrawing,  this.halfLengthDrawing],
                            [-this.halfLength, -this.halfLengthDrawing,  this.halfLengthDrawing]])
        }
        if(this.posInSpace[0] == dim-1) {
            this.quads.push(["red",
                            [ this.halfLength, -this.halfLengthDrawing, -this.halfLengthDrawing],
                            [ this.halfLength,  this.halfLengthDrawing, -this.halfLengthDrawing],
                            [ this.halfLength,  this.halfLengthDrawing,  this.halfLengthDrawing],
                            [ this.halfLength, -this.halfLengthDrawing,  this.halfLengthDrawing]])
        }
        if(this.posInSpace[2] == 0) {
            this.quads.push(["blue",
                            [-this.halfLengthDrawing, -this.halfLengthDrawing, -this.halfLength],
                            [ this.halfLengthDrawing, -this.halfLengthDrawing, -this.halfLength],
                            [ this.halfLengthDrawing,  this.halfLengthDrawing, -this.halfLength],
                            [-this.halfLengthDrawing,  this.halfLengthDrawing, -this.halfLength]])
        }
        if(this.posInSpace[2] == dim-1) {
            this.quads.push(["green",
                            [-this.halfLengthDrawing, -this.halfLengthDrawing,  this.halfLength],
                            [ this.halfLengthDrawing, -this.halfLengthDrawing,  this.halfLength],
                            [ this.halfLengthDrawing,  this.halfLengthDrawing,  this.halfLength],
                            [-this.halfLengthDrawing,  this.halfLengthDrawing,  this.halfLength]])
        }
        if(this.posInSpace[1] == 0) {
            this.quads.push(["white",
                            [-this.halfLengthDrawing, -this.halfLength, -this.halfLengthDrawing],
                            [ this.halfLengthDrawing, -this.halfLength, -this.halfLengthDrawing],
                            [ this.halfLengthDrawing, -this.halfLength,  this.halfLengthDrawing],
                            [-this.halfLengthDrawing, -this.halfLength,  this.halfLengthDrawing]])
        }
        if(this.posInSpace[1] == dim-1) {
            this.quads.push(["yellow",
                            [-this.halfLengthDrawing,  this.halfLength, -this.halfLengthDrawing],
                            [ this.halfLengthDrawing,  this.halfLength, -this.halfLengthDrawing],
                            [ this.halfLengthDrawing,  this.halfLength,  this.halfLengthDrawing],
                            [-this.halfLengthDrawing,  this.halfLength,  this.halfLengthDrawing]])
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
