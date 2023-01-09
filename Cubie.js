class Cubie{
    constructor(x, y, z, sideLength) {
        this.sideLength = sideLength
        this.initialPos = createVector(x, y, z)
        this.pos = createVector(x, y, z)
    }

    show() {
        fill(255)
        stroke(0)
        strokeWeight(2)
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        box(this.sideLength)


        pop()
    }
}
